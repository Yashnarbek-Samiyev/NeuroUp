import os
import subprocess

files = [
    "bemor-qarovchisi-uchun-qul-mashqlari-2",
    "insult-bemorni-uzi-aktiv-qilishi-uchun-oyoq-mashqlari",
    "bemor-qarovchisi-uchun-oyoq-mashqlari-1-qism",
    "bemor-qarovchisi-uchun-oyoq-mashqlari-2-qism"
]

for name in files:
    mov_path = f"videolar/movemore/{name}.MOV"
    m4v_path = f"public/videolar/movemore/{name}.m4v"
    mp4_path = f"public/videolar/movemore/{name}.mp4"
    
    print(f"Compressing {name} ...")
    cmd = [
        "avconvert",
        "-s", mov_path,
        "-p", "PresetAppleM4V480pSD",
        "-o", m4v_path,
        "--replace"
    ]
    res = subprocess.run(cmd)
    if res.returncode == 0 and os.path.exists(m4v_path):
        os.replace(m4v_path, mp4_path)
        sz = os.path.getsize(mp4_path) / (1024*1024)
        print(f"Done {name}: {sz:.1f} MB")

print("All large videos converted to <70MB MP4!")
