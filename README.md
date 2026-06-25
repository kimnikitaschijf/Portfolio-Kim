# Portfolio — Kim Nikita Schijf

Personal portfolio built with **SvelteKit**. Content and structure are complete; visual design is applied separately via CSS tokens.

## Commands

```sh
yarn install
yarn dev      # http://localhost:5173
yarn build    # production build
yarn preview  # preview production build
yarn check    # TypeScript + Svelte validation
```

## Project structure

```text
src/
├── lib/
│   ├── components/
│   │   ├── layout/       # SiteNav, SiteFooter, ThemeToggle
│   │   ├── sections/     # HomeHero, FeaturedWork, GallerySection, …
│   │   └── ui/           # PageShell, SectionBlock, ProjectCard, PageMeta, …
│   ├── data/
│   │   ├── config.ts     # Site identity & links
│   │   ├── navigation.ts # Nav, footer, contact links
│   │   ├── types.ts      # Shared TypeScript types
│   │   ├── content/      # All copy — see below
│   │   └── site.ts       # Barrel export — import from here
│   ├── scripts/          # Easter eggs
│   ├── styles/           # CSS modules (tokens → components)
│   └── utils/            # meta, nav, links
├── routes/               # Thin page composers — no hardcoded copy
static/                   # Images, favicon
DESIGN.md                 # Handoff guide for applying visual design
```

## Pages

| Route       | What it is                             |
| ----------- | -------------------------------------- |
| `/`         | Landing — hero, featured work, explore |
| `/about`    | Full bio, skills, timeline, facts      |
| `/work`     | All projects with details              |
| `/notes`    | Wiki highlights                        |
| `/now`      | Current focus (à la nownownow)         |
| `/contact`  | Email, GitHub, LinkedIn                |
| `/colophon` | Stack, fonts, credits                  |
| `/secret`   | Hidden — find it yourself              |

## Content — where to edit copy

All user-facing text lives in `src/lib/data/content/`. Routes and components read from `$lib/data/site`.

| What                         | File(s)                       |
| ---------------------------- | ----------------------------- |
| Name, email, social links    | `data/config.ts`              |
| About copy, skills, timeline | `data/content/about.ts`       |
| Projects                     | `data/content/projects.ts`    |
| Notes highlights             | `data/content/notes.ts`       |
| Page titles, meta, CTAs      | `data/content/pages.ts`       |
| Homepage sections            | `data/content/home.ts`        |
| UI labels (nav, cards)       | `data/content/ui.ts`          |
| Error page copy              | `data/content/errors.ts`      |
| Easter egg messages          | `data/content/easter-eggs.ts` |
| Now / colophon / secret body | `data/content/pages.ts`       |
| Navigation & contact         | `data/navigation.ts`          |

## Applying design later

See **[DESIGN.md](./DESIGN.md)** for the full handoff guide.

Quick version:

1. `src/lib/styles/tokens.css` — colors, fonts, spacing
2. `src/app.html` — Google Fonts (sync with tokens)
3. `typography.css` → `layout.css` → `components.css`
4. `static/` — images and favicon

**Do not** change `src/lib/data/` or route structure for a design pass.

## Easter eggs

- **Konami code** (↑↑↓↓←→←→BA) → secret page
- **Click portrait 5×** on homepage → secret page
- **Type "coffee"** anywhere → surprise toast
- **Open devtools** → console message
- **404 page** hints that not everything is linked

## Stack

- Svelte 5 + SvelteKit 2
- TypeScript
- Plain CSS with custom properties (no framework)
- Netlify (prerendered static pages)
