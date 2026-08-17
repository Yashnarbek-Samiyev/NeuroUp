import { Language } from '../types';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private isSpeaking = false;
  private onStateChangeListeners: ((speaking: boolean) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
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

  public speak(text: string, lang: Language = 'uz', onEnd?: () => void) {
    if (!this.synth) {
      console.warn('Speech synthesis is not supported on this browser.');
      return;
    }

    // Stop previous speech
    this.stop();

    const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Set appropriate BCP 47 language code
    if (lang === 'ru') {
      utterance.lang = 'ru-RU';
    } else if (lang === 'en') {
      utterance.lang = 'en-US';
    } else {
      // Uzbek fallback (if uz-UZ not installed on OS, falls back to best match or ru/en)
      utterance.lang = 'uz-UZ';
    }

    utterance.rate = 0.9; // Slightly slower for stroke/rehabilitation clarity
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

    this.synth.speak(utterance);
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.notifyState(false);
    }
  }

  public getSpeakingState(): boolean {
    return this.isSpeaking;
  }
}

export const speechService = new SpeechService();
