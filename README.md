# Portfolio — Kim Nikita Schijf

Personal portfolio built with **SvelteKit**.

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
│   │   ├── sections/     # Homepage sections (CoverHero, MeetSection, …)
│   │   └── ui/           # PageShell, SectionBlock, ProjectCard, PageMeta, …
│   ├── data/
│   │   ├── config.ts     # Site identity & links (name, email, github, …)
│   │   ├── navigation.ts # Nav, footer, contact links
│   │   ├── types.ts      # Shared TypeScript types
│   │   ├── content/      # Page copy (about, projects, notes, pages)
│   │   └── site.ts       # Barrel export — import from here as usual
│   ├── scripts/          # Easter eggs
│   ├── styles/
│   │   ├── tokens.css    # Design tokens (:root variables) ← start here
│   │   ├── base.css      # Reset & accessibility
│   │   ├── utilities.css # .wrap, .stack-*, .text-muted
│   │   ├── typography.css
│   │   ├── layout.css    # Pages, sections, nav, footer, grids
│   │   ├── components.css# Cards, hero, project tiles, …
│   │   └── global.css    # Imports all of the above
│   └── utils/            # meta, nav, links
├── routes/               # One folder per page
static/                   # Images, favicon — served at /
```

## Pages

| Route       | What it is                           |
| ----------- | ------------------------------------ |
| `/`         | Landing — hero, intro, featured work |
| `/about`    | Full bio, skills, timeline           |
| `/work`     | All projects with details            |
| `/notes`    | Wiki highlights                      |
| `/now`      | Current focus (à la nownownow)       |
| `/contact`  | Email, GitHub, LinkedIn              |
| `/colophon` | Stack, fonts, credits                |
| `/secret`   | Hidden — find it yourself            |

## Applying a design later

1. **`tokens.css`** — colors, fonts, spacing, radius, shadows
2. **`app.html`** — Google Fonts link (keep in sync with tokens)
3. **`typography.css`** — link styles, prose, quotes
4. **`layout.css`** — page rhythm, nav, footer, grids
5. **`components.css`** — cards, hero, project tiles, hover states
6. **`static/`** — swap images and favicon

Content stays separate in `src/lib/data/content/` — you won't need to touch routes when restyling.

## Where to edit what

| What                         | File(s)                    |
| ---------------------------- | -------------------------- |
| Name, email, social links    | `data/config.ts`           |
| About copy, skills, timeline | `data/content/about.ts`    |
| Projects                     | `data/content/projects.ts` |
| Notes highlights             | `data/content/notes.ts`    |
| Now / colophon / secret      | `data/content/pages.ts`    |
| Navigation & contact         | `data/navigation.ts`       |
| Design tokens                | `styles/tokens.css`        |
| Component look & feel        | `styles/components.css`    |

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
