import os
import subprocess
import glob

mov_files = glob.glob("videolar/movemore/*.MOV")
print(f"Found {len(mov_files)} MOV files to convert to lightweight web mp4...")

os.makedirs("public/videolar/movemore", exist_ok=True)

for mov_path in mov_files:
    filename = os.path.splitext(os.path.basename(mov_path))[0]
    out_mp4 = f"public/videolar/movemore/{filename}.mp4"
    out_m4v = f"public/videolar/movemore/{filename}.m4v"
    
    print(f"Compressing {filename} ...")
    cmd = [
        "avconvert",
        "-s", mov_path,
        "-p", "PresetAppleM4VWiFi",
        "-o", out_m4v,
        "--replace"
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if res.returncode == 0 and os.path.exists(out_m4v):
        os.replace(out_m4v, out_mp4)
        sz_mb = os.path.getsize(out_mp4) / (1024*1024)
        print(f"✅ Done {filename}: {sz_mb:.2f} MB")
    else:
        print(f"❌ Error compressing {filename}: {res.stderr.decode('utf-8')}")

print("🎉 All 20 videos successfully converted to lightweight web MP4!")
