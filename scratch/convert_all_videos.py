import os
import subprocess
import glob

mov_files = glob.glob("public/videolar/movemore/*.MOV")
print(f"Found {len(mov_files)} MOV files to convert...")

for mov_path in mov_files:
    mp4_path = os.path.splitext(mov_path)[0] + ".mp4"
    if os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 1000000:
        print(f"Skipping already converted: {mp4_path}")
        continue
    
    print(f"Converting {mov_path} -> {mp4_path} ...")
    cmd = [
        "avconvert",
        "--source", mov_path,
        "--preset", "Preset960x540",
        "--output", mp4_path,
        "--replace"
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if res.returncode == 0:
        mov_sz = os.path.getsize(mov_path) / (1024*1024)
        mp4_sz = os.path.getsize(mp4_path) / (1024*1024)
        print(f"Done! {mov_sz:.1f} MB -> {mp4_sz:.1f} MB")
    else:
        print(f"Error converting {mov_path}: {res.stderr.decode('utf-8')}")

print("All conversions complete!")
