# razschwartz.net

Personal site of Raz Schwartz. Plain HTML, no build step, hosted on Netlify.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole site: content, styles, and layout |
| `Raz_Schwartz_CV.pdf` | CV linked from the site; replace the file to update it |
| `me.jpeg` | Profile photo |
| `lossless.jpg`, `wrapped.jpg`, `oculusgo.jpg`, `return2.png` | Work section images |
| `favicon.ico` | Browser tab icon |
| `netlify.toml` | Netlify settings (no build step, publish the repo root) |

## Updating the site

Once Netlify is linked to this repo, every push to `main` goes live in about 30 seconds.

- **Ask Claude:** open a Claude Code session on this repo and describe the change, for example "add a new project card for X", and have it push to `main`.
- **On GitHub:** open `index.html`, click the pencil icon, edit, and commit to `main`.
- **Locally:** run `python3 -m http.server 8000` in this folder, open http://localhost:8000, then commit and push.

Pushes to any other branch, or pull requests, get their own Netlify preview URL before going live.
