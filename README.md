# Ambika Real Estate

**Website**: [ambika-real-estate.vercel.app](https://ambika-real-estate.vercel.app/)

Premium commercial space website for Ambika Real Estate — a 10,500 sq ft G+2 building on a corner plot in Chakan MIDC. 2nd floor of 3,400 sq ft available for rent.

## Tech Stack

- **Framework**: Svelte 5 (runes mode) + SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Inter (self-hosted via `@fontsource/inter`)
- **Adapter**: `@sveltejs/adapter-vercel`
- **Form Data Storage**: Airtable (via REST API + axios)

## Getting Started

```sh
npm install
cp .env.example .env
```

Set `AIRTABLE_API_TOKEN`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE_NAME` in `.env` (see Airtable setup below).

```sh
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Airtable Integration

The contact form submits enquiries to Airtable via a server-side API endpoint (`/api/contact`), keeping credentials secure.

### Setup

1. **Create an Airtable base** with a table named `contacts` containing these fields:
   `Timestamp`, `Name`, `Company`, `Contact`, `Email`, `Message`
2. **Create a Personal Access Token** at [https://airtable.com/create/tokens](https://airtable.com/create/tokens) with scopes:
   - `data.records:read`
   - `data.records:write`
3. **Set environment variables** in `.env`:

   ```
   AIRTABLE_API_TOKEN=patXXXXXXXXXXXXXX
   AIRTABLE_BASE_ID=apps1YkGRRQMVqyBG
   AIRTABLE_TABLE_NAME=contacts
   ```

> **Note**: These variables are server-only (`$env/static/private`). They never reach the client bundle.

### Duplicate Detection

When a contact form is submitted with a phone number that already exists in the table, the server returns a `duplicate` response and the user sees an amber warning instead of creating a duplicate record.

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
│   ├── amenities/        # Amenities, property specs, suitable-for
│   ├── api/
│   │   └── contact/      # POST endpoint — proxies form data to Airtable
│   ├── gallery/
│   ├── location/
│   └── contact/          # Contact form page with Airtable-backed submission
└── app.html
```

## Pages

- **Home** — Hero with gradient, stats bar, video tour, amenities preview, location highlight
- **About** — About Ambika Real Estate
- **Amenities** — Property amenities, specifications (floor area, heights, roads), suitable-for tags (IT, Pharma, Warehouse, etc.)
- **Gallery** — Video walkthroughs + photo carousel
- **Location** — Google Maps embed with Address, Area Highlights, and Accessibility info cards, nearby landmarks, and connectivity advantages
- **Contact** — Enquiry form with Airtable-backed submission, duplicate contact detection, and spinner/success/error states

## Brand Colors

- Orange `#FFA500` (primary / `brand-500`)
- Blue `#38B6FF` (secondary / `primary-500`)
- Gold `#FECF67` (accent / `accent-500`)

## Favicon

The favicon uses the brand logo PNG (`static/favicon.png`).

## Changelog

### 1.9.0
- Location page: redesigned information cards (Address, Area Highlights, Accessibility) with centered layout, inline emoji, and improved typography
- Removed redundant "Strategic Location" heading — content now sits directly below the page title
- Cards now stretch to match map height for a balanced layout
- Removed hardcoded line breaks; cleaned up address formatting

### 1.8.0
- Mobile contact page: replaced dual internal scroll areas with continuous page-level scroll for smoother UX

### 1.7.0
- Redesigned hero section: full-width multi-column layout with dynamic column ratios (70/15/15, 60/15/25, 80/20)
- Added Premium Building Photo and Evening Photo to hero section
- Expanded text content and description to full width
- StatsBar grid spreads 6 cards across full width on desktop with larger padding
- Removed min-height constraint — hero shrinks to fit content
- Optimized image sizing with `object-contain` and responsive aspect ratios

### 1.6.0
- Moved Connectivity & Advantages section from amenities to location page
- Added Nigdi Metro Station (17 Km) to Metro & Railway card

### 1.5.0
- Added Horizon Industrial Park card to Connectivity & Advantages section
- Added "Created by Utkarsh Gaikwad" credit in header
- Added "India's largest industrial hub" tagline in hero and home page

### 1.4.0
- Replaced "lease" with "rent" across all pages
- Added brochure content (property features, suitable for, connectivity) to amenities page
- Removed 24/7 Security amenity card
- Added duplicate contact detection to contact form
- Added spinner, success, and error states to contact form
- Clarified 2nd floor (3,400 sq ft) availability

---

**Created by Utkarsh Gaikwad**
