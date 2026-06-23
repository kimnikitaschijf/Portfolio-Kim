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
│   │   └── sections/     # Homepage sections (one file per section)
│   ├── data/site.ts      # All content, links, and site config
│   ├── styles/global.css # Design tokens + shared utilities
│   └── utils/nav.ts      # Nav active-state helper
├── routes/
│   ├── +layout.svelte    # Shell: nav, footer, global CSS
│   ├── +page.svelte      # Homepage (composes sections)
│   └── about/+page.svelte
static/                   # Public assets (images, favicon) — served at /
```

## Where to edit what

| What                               | File                                            |
| ---------------------------------- | ----------------------------------------------- |
| Copy, projects, nav, contact links | `src/lib/data/site.ts`                          |
| Colors, fonts, spacing             | `src/lib/styles/global.css` (`:root` variables) |
| Homepage sections                  | `src/lib/components/sections/*.svelte`          |
| About page layout                  | `src/routes/about/+page.svelte`                 |
| Portrait / favicon                 | `static/` folder                                |

## Adding design later

1. Tweak CSS variables in `global.css` (`--accent`, `--bg`, fonts, etc.).
2. Style individual sections in each component's `<style>` block.
3. Put images in `static/` and reference them as `/filename.jpg`.

> **Note:** SvelteKit serves files from `static/`, not `public/`.

## Stack

- Svelte 5 + SvelteKit 2
- TypeScript
- No CSS framework — plain CSS with custom properties
