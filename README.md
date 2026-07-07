# Ambika Real Estate

Premium commercial space website for Ambika Real Estate — a 3400 sq ft property on the 2nd floor available for lease in Chakan MIDC.

## Tech Stack

- **Framework**: Svelte 5 (runes mode) + SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Inter (self-hosted via `@fontsource/inter`)
- **Adapter**: `@sveltejs/adapter-vercel`

## Getting Started

```sh
npm install
cp .env.example .env
```

Set `PUBLIC_GOOGLE_SHEETS_URL` in `.env` (see Google Sheets setup below).

```sh
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Google Sheets Integration

The contact form submits enquiries to Google Sheets via a no-cors POST:

1. Create a Google Sheet with columns: `Timestamp`, `Name`, `Company`, `Contact`, `Email`, `Message`
2. Open **Extensions → Apps Script**
3. Paste the contents of `GoogleSheets_AppScript.gs`
4. Deploy → **New deployment** → Type: **Web app**
5. Set **Execute as**: `Me`, **Who has access**: `Anyone`
6. Copy the web app URL and set it as `PUBLIC_GOOGLE_SHEETS_URL` in `.env`

## Project Structure

```
src/
├── lib/
│   ├── assets/           # Images
│   └── components/       # Header, Hero, StatsBar, AutoCarousel, YouTubePlayer, ContactForm, etc.
├── routes/
│   ├── +layout.svelte    # Header + Footer wrapper
│   ├── +page.svelte      # Home page
│   ├── about/
│   ├── amenities/
│   ├── gallery/
│   ├── location/
│   └── contact/
└── app.html
```

## Pages

- **Home** — Hero with gradient, stats bar, video tour, amenities preview, location highlight
- **About** — About Ambika Real Estate
- **Amenities** — All property amenities
- **Gallery** — Video walkthroughs + photo carousel
- **Location** — Google Maps embed with "Open in Google Maps" button, nearby landmarks
- **Contact** — Enquiry form with country code dropdown + contact details (no-scroll layout)

## Brand Colors

- Orange `#FFA500` (primary / `brand-500`)
- Blue `#38B6FF` (secondary / `primary-500`)
- Gold `#FECF67` (accent / `accent-500`)

## Favicon

The favicon uses the brand logo PNG (`static/favicon.png`).
