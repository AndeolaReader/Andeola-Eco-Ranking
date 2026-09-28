import subprocess
for name in ['hannah', 'david', 'elena']:
    res = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration,bit_rate', f'public/videos/{name}-review.mp4'], capture_output=True, text=True)
    print(name, res.stdout.strip())
