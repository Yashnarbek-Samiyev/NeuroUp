import os
import subprocess
import glob

mp4_files = glob.glob("public/videolar/movemore/*.mp4")

for mp4_path in mp4_files:
    if mp4_path.endswith(".tmp.mp4"):
        continue
    sz_mb = os.path.getsize(mp4_path) / (1024*1024)
    if sz_mb > 40.0:
        mov_path = os.path.splitext(mp4_path)[0] + ".MOV"
        if not os.path.exists(mov_path):
            mov_path = os.path.join("videolar/movemore", os.path.basename(mov_path))
        
        src_file = mov_path if os.path.exists(mov_path) else mp4_path
        tmp_file = mp4_path + ".tmp.mp4"
        print(f"Compressing heavy video ({sz_mb:.1f} MB): {mp4_path}")
        cmd = [
            "avconvert",
            "--source", src_file,
            "--preset", "Preset640x480",
            "--output", tmp_file,
            "--replace"
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if res.returncode == 0 and os.path.exists(tmp_file):
            os.replace(tmp_file, mp4_path)
            new_sz = os.path.getsize(mp4_path) / (1024*1024)
            print(f"Success: {sz_mb:.1f} MB -> {new_sz:.1f} MB")

print("All large MP4 files compressed under 40MB!")
