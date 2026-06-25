# Design handoff guide

This site is **content- and structure-complete**. Visual design can be applied without touching copy or routes.

## What is done (do not redesign from scratch)

- All **routes** and page structure
- All **copy** in `src/lib/data/`
- **Component architecture** (layout → sections → ui)
- **Accessibility** basics (skip link, focus, aria, semantic HTML)
- **Dark mode** toggle (via `data-theme` on `<html>`)
- **Easter eggs** (Konami, portrait clicks, coffee typing, console message)
- **Prerendered** static build for Netlify

## What to change for a design pass

Only touch these — **not** route files or data unless adding new content:

| Priority | File                            | What to change                                    |
| -------- | ------------------------------- | ------------------------------------------------- |
| 1        | `src/lib/styles/tokens.css`     | Colors, fonts, spacing, radius, shadows           |
| 2        | `src/app.html`                  | Google Fonts URL (keep in sync with `tokens.css`) |
| 3        | `src/lib/styles/typography.css` | Links, prose, quotes, lists                       |
| 4        | `src/lib/styles/layout.css`     | Page rhythm, nav, footer, grids                   |
| 5        | `src/lib/styles/components.css` | Cards, hero, strips, hover/focus states           |
| 6        | `static/`                       | Portrait, favicon, project images                 |

## Content map (single source of truth)

Import everything from `$lib/data/site`:

```
src/lib/data/
├── config.ts           # Identity: name, email, socials, portrait path
├── navigation.ts       # Nav items, explore links, footer, contact cards
├── types.ts            # TypeScript types
└── content/
    ├── about.ts        # Bio, skills, timeline, facts, fun facts
    ├── projects.ts     # All projects + featured slugs
    ├── notes.ts        # Wiki highlight cards
    ├── pages.ts        # /now, /colophon, /secret + per-route meta/titles/CTAs
    ├── home.ts         # Homepage section titles and hero CTAs
    ├── ui.ts           # Shared labels (nav, cards, a11y hints)
    ├── errors.ts       # 404 and error page copy
    └── easter-eggs.ts  # Toast + console messages
```

### Routes → data wiring

| Route       | Route file                     | Content source                                      |
| ----------- | ------------------------------ | --------------------------------------------------- |
| `/`         | `routes/+page.svelte`          | `home`, `about`, `featuredProjects`, `exploreLinks` |
| `/about`    | `routes/about/+page.svelte`    | `pages.about`, `about`                              |
| `/work`     | `routes/work/+page.svelte`     | `pages.work`, `projects`                            |
| `/notes`    | `routes/notes/+page.svelte`    | `pages.notes`, `noteEntries`                        |
| `/now`      | `routes/now/+page.svelte`      | `pages.now`, `now`                                  |
| `/contact`  | `routes/contact/+page.svelte`  | `pages.contact`, `ConnectSection`                   |
| `/colophon` | `routes/colophon/+page.svelte` | `pages.colophon`, `colophon`                        |
| `/secret`   | `routes/secret/+page.svelte`   | `pages.secret`, `secretPage`                        |
| Error       | `routes/+error.svelte`         | `errors`                                            |

Route files are **thin**: they only compose components and pass data. No user-facing strings in routes.

## Component layers

```
layout/     SiteNav, SiteFooter, ThemeToggle     — site chrome
sections/   HomeHero, FeaturedWork, Explore…      — page blocks
ui/         PageShell, PageHeader, ProjectCard…   — primitives
```

### Section components (homepage + reusable blocks)

- `HomeHero` — intro, portrait, CTAs
- `FeaturedWork` — project strip
- `ExploreSection` — numbered explore list
- `GallerySection` — project grid (`showHeader`, `inPage` props)
- `ConnectSection` — contact cards (`showHeader`, `flush` props)

### UI primitives

- `PageShell` — page wrapper (`.page`, compact/centered variants)
- `PageHeader` — back link + h1 + subtitle
- `PageMeta` — `<title>` + description
- `SectionBlock` — section with optional header, bordered/muted/hero
- `ContentBlock` — inner-page h2 sections (about, colophon)
- `ProjectCard` — project tile (full/compact, embedded modes)
- `InfoCard` — label + title + text + optional link

## CSS architecture

`src/lib/styles/global.css` imports in order:

1. `tokens.css` — design variables (`:root`, `[data-theme="dark"]`)
2. `base.css` — reset, body, focus, skip-link
3. `utilities.css` — `.wrap`, `.stack-*`, `.mono`, `.text-muted`
4. `typography.css` — prose, links, tags
5. `layout.css` — pages, sections, nav, footer, grids
6. `components.css` — component-specific styles

Class naming: BEM-ish blocks (`home-intro__photo`, `featured-strip__link`, `nav__link--on`).

## Suggested design workflow (for Claude or any designer)

1. Read this file and `tokens.css`
2. Propose or apply a new visual direction in **tokens first**
3. Adjust typography and layout rhythm
4. Restyle components in `components.css` — keep HTML structure unless layout must change
5. Swap images in `static/`
6. Run `yarn check` and `yarn build`
7. Test all routes + dark mode + mobile

## Prompt template for Claude

```text
This is a SvelteKit portfolio. Content and routes are final — only apply visual design.

Read DESIGN.md and src/lib/styles/tokens.css first.
Do NOT change text in src/lib/data/ or route structure.
Apply design via tokens.css → typography.css → layout.css → components.css.
Keep accessibility: focus states, contrast, skip link, aria labels.

Design direction: [describe your vision here]
```

## Assets still placeholder

- Project card images: Unsplash URLs in `content/projects.ts` — replace with `static/projects/…` when ready
- Portrait: `static/IMG_0225.JPG` (local, final)

## Optional future additions (not required for design)

- `/work/[slug]` project detail pages
- Per-note wiki deep links in `notes.ts`
- Open Graph meta in `PageMeta.svelte`
- OG image generation

## Commands

```sh
yarn dev      # http://localhost:5173
yarn check    # TypeScript + Svelte
yarn build    # Production build
```
