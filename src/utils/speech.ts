import { Language } from '../types';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private isSpeaking = false;
  private onStateChangeListeners: ((speaking: boolean) => void)[] = [];
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices() || [];
  }

  public subscribe(listener: (speaking: boolean) => void) {
    this.onStateChangeListeners.push(listener);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter(l => l !== listener);
    };
  }

  private notifyState(speaking: boolean) {
    this.isSpeaking = speaking;
    this.onStateChangeListeners.forEach(l => l(speaking));
  }

  private findBestVoice(lang: Language): SpeechSynthesisVoice | null {
    if (!this.voices.length) {
      this.loadVoices();
    }
    const targetLangPrefix = lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'uz';
    
    // Exact or prefix match
    const matchedVoice = this.voices.find(v => v.lang.toLowerCase().startsWith(targetLangPrefix));
    if (matchedVoice) return matchedVoice;

    // Fallback for Uzbek if no native voice installed
    if (lang === 'uz') {
      const fallbackVoice = this.voices.find(v => v.lang.toLowerCase().startsWith('tr') || v.lang.toLowerCase().startsWith('ru') || v.default);
      if (fallbackVoice) return fallbackVoice;
    }

    return this.voices[0] || null;
  }

  public speak(text: string, lang: Language = 'uz', onEnd?: () => void) {
    if (!this.synth) {
      console.warn('Speech synthesis is not supported on this browser.');
      return;
    }

    // Stop previous speech
    this.stop();

    const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) return;

    // Ensure synthesis is not paused
    if (this.synth.paused) {
      this.synth.resume();
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    if (lang === 'ru') {
      utterance.lang = 'ru-RU';
    } else if (lang === 'en') {
      utterance.lang = 'en-US';
    } else {
      utterance.lang = 'uz-UZ';
    }

    const voice = this.findBestVoice(lang);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = 0.92; // Clear pacing for rehabilitation
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.notifyState(true);
    };

    utterance.onend = () => {
      this.notifyState(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      this.notifyState(false);
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {
      console.error('Speech speak failed:', e);
      this.notifyState(false);
    }
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        console.error('Speech cancel error:', e);
      }
      this.notifyState(false);
    }
  }

  public getSpeakingState(): boolean {
    return this.isSpeaking;
  }
}

export const speechService = new SpeechService();
