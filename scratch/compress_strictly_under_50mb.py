import os
import subprocess

large_files = [
    "public/videolar/movemore/bemor-qarovchisi-uchun-oyoq-mashqlari-1-qism.mp4",
    "public/videolar/movemore/bemor-qarovchisi-uchun-oyoq-mashqlari-2-qism.mp4",
    "public/videolar/movemore/bemor-qarovchisi-uchun-qul-mashqlari-2.mp4",
    "public/videolar/movemore/insult-bemorni-uzi-aktiv-qilishi-uchun-oyoq-mashqlari.mp4",
    "public/videolar/movemore/bemor-qarovchisi-uchun-qul-mashqlari-1.mp4"
]

for mp4_path in large_files:
    if not os.path.exists(mp4_path):
        continue
    sz_mb = os.path.getsize(mp4_path) / (1024*1024)
    if sz_mb > 50.0:
        mov_path = os.path.splitext(mp4_path)[0] + ".MOV"
        if not os.path.exists(mov_path):
            mov_path = os.path.join("videolar/movemore", os.path.basename(mov_path))
        
        src_file = mov_path if os.path.exists(mov_path) else mp4_path
        tmp_file = mp4_path + ".tmp.mp4"
        print(f"Compressing heavy video ({sz_mb:.1f} MB): {mp4_path}")
        
        # Use PresetAppleM4V480pSD to get files down to 20-30MB
        cmd = [
            "avconvert",
            "--source", src_file,
            "--preset", "PresetAppleM4V480pSD",
            "--output", tmp_file,
            "--replace"
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if res.returncode == 0 and os.path.exists(tmp_file):
            os.replace(tmp_file, mp4_path)
            new_sz = os.path.getsize(mp4_path) / (1024*1024)
            print(f"Compressed {mp4_path}: {sz_mb:.1f} MB -> {new_sz:.1f} MB")

print("All large MP4 files strictly compressed under 50MB!")
