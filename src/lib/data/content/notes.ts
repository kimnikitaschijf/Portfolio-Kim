import { site } from "$lib/data/config";
import type { NoteEntry } from "$lib/data/types";

export const noteEntries: NoteEntry[] = [
  {
    title: "SvelteKit routing clicked",
    week: "week 12",
    summary:
      "Finally understood layouts vs pages. +page.svelte is my friend now.",
    href: site.wiki,
  },
  {
    title: "CSS grid vs flex — when to use what",
    week: "week 10",
    summary:
      "Grid for the page skeleton, flex for the bits inside. Obvious in hindsight.",
    href: site.wiki,
  },
  {
    title: "Accessibility audit on a class project",
    week: "week 8",
    summary:
      "Found 14 issues. Fixed 11. The other 3 are 'next sprint' (aka someday).",
    href: site.wiki,
  },
  {
    title: "First deploy to Netlify",
    week: "week 6",
    summary:
      "Build failed twice. Third time's the charm. env vars are not optional.",
    href: site.wiki,
  },
];
