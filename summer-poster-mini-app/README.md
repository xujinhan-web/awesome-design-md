# Summer Poster Mini App

A mobile-first Next.js mini-app for generating whimsical summer football Polaroid posters.

## What it does

- Landing screen uses the provided dog football background URL first, `public/assets/home-bg.jpg` if present, and `home-bg.svg` as a built-in placeholder fallback.
- Player studio supports 3-4 names.
- Empty player labels become transparent outline labels.
- AI generation uses Gemini first, or Hugging Face as a fallback, and returns a no-text Q-version child football player group illustration.
- The app overlays names in the browser so spelling stays accurate.
- Save Poster PNG downloads the Polaroid card only.

## Setup

```bash
npm install
cp .env.example .env.local
```

Add your Gemini API key to `.env.local` if you cannot use Hugging Face:

```bash
GEMINI_API_KEY=your_gemini_key_here
```

Do not commit `.env.local`. The API route uses `GEMINI_API_KEY` first, then falls back to `HUGGINGFACE_API_KEY` if Gemini is not configured.

## Reference images

The app is configured with these reference URLs from the provided image host:

- Dog landing background: `https://s41.ax1x.com/2026/06/13/pmQ8kLQ.jpg`
- Q-version child-player group poster reference: `https://s41.ax1x.com/2026/06/13/pmQ8Gw9.jpg`

## Add the real background image locally

For the most reliable offline/downloadable project, also save the uploaded puppy-football background at:

```text
public/assets/home-bg.jpg
```

The CSS is already set to show the full image with `background-size: contain`, and falls back to `home-bg.svg` if neither the remote URL nor local JPG is available.

## Run

```bash
npm run dev
```

Open `http://localhost:3000`.
