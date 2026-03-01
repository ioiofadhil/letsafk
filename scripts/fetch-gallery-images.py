#!/usr/bin/env python3
"""
Fetches Instagram images from lets.afk and saves to public/gallery/.
Run: python3 scripts/fetch-gallery-images.py
Uses curl for requests (bypasses issues with Python HTTP libs).
"""
import json
import os
import subprocess

API_URL = "https://i.instagram.com/api/v1/users/web_profile_info/?username=lets.afk"
UA = "Instagram 279.0.0.27.98 (iPhone14,2; iOS 16_0)"

# Fetch API with curl
result = subprocess.run(
    ["curl", "-sL", "-A", UA, "-H", "X-IG-App-ID: 936619743392459", API_URL],
    capture_output=True,
    text=True,
    cwd=os.path.dirname(os.path.dirname(os.path.abspath(__file__))) or ".",
)
data = json.loads(result.stdout)

edges = (
    data.get("data", {})
    .get("user", {})
    .get("edge_owner_to_timeline_media", {})
    .get("edges", [])
)
posts = [
    {
        "postUrl": f"https://www.instagram.com/p/{n['node']['shortcode']}/",
        "imageUrl": n["node"].get("display_url") or n["node"].get("thumbnail_src"),
    }
    for n in edges
]

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) or "."
gallery = os.path.join(base, "public", "gallery")
os.makedirs(gallery, exist_ok=True)

for i, post in enumerate(posts):
    out = os.path.join(gallery, f"{i + 1}.jpg")
    subprocess.run(
        ["curl", "-sL", "-A", UA, "-o", out, post["imageUrl"]],
        check=True,
        cwd=base,
    )
    print(f"Saved {i + 1}.jpg")

# Write config
config = """/**
 * Instagram posts from https://www.instagram.com/lets.afk/
 * Images in public/gallery/. Run: python3 scripts/fetch-gallery-images.py
 */
export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/lets.afk/';

export const INSTAGRAM_POSTS: { postUrl: string; imageUrl: string }[] = [
"""
for i, post in enumerate(posts):
    config += f"  {{ postUrl: '{post['postUrl']}', imageUrl: '/gallery/{i + 1}.jpg' }},\n"
config += "];\n"

config_path = os.path.join(base, "src", "config", "instagram.ts")
with open(config_path, "w") as f:
    f.write(config)
print("Updated src/config/instagram.ts")
