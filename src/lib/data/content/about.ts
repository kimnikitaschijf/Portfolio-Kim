import type { AboutFact, TimelineEntry } from "$lib/data/types";

export const about = {
  hello:
    "Hey — I'm Kim. 20, from Heerhugowaard, now studying in Amsterdam. I like making things on the web that feel calm and a bit human.",
  intro: `Most days I'm somewhere between Figma and VS Code, turning school briefs into real pages. I write stuff down as I go — not because it sounds professional, but because future-me always forgets what past-me figured out.`,
  paragraphs: [
    "I'm not pretending to have ten years of experience. I'd rather show what I'm actually working on, say when something's rough, and get better out loud.",
    "Little things matter to me: tab order that makes sense, copy that sounds like a person, layouts that don't fall apart on a phone. Boring details, but they make sites feel cared for.",
    "When I'm not coding I'm probably reorganising folders, updating my wiki, or drinking too much coffee in the HvA building.",
    "This site is my little corner of the internet — part portfolio, part learning log, part 'look what I figured out this week'.",
  ],
  aside: "Accessible HTML, honest copy, no fake senior energy.",
  facts: [
    { label: "Right now", value: "2nd year FDND" },
    { label: "From", value: "Noord-Holland" },
    { label: "Into", value: "UI, a11y, Svelte" },
    { label: "Vibe", value: "calm & clear" },
  ] satisfies AboutFact[],
  skills: [
    "HTML & semantic markup",
    "CSS & responsive layout",
    "JavaScript & TypeScript",
    "Svelte / SvelteKit",
    "Accessibility basics",
    "Design → code",
    "Git & GitHub",
    "Figma basics",
  ],
  currently: [
    "This portfolio (yes, still tweaking it)",
    "Weekly FDND learning notes",
    "Random CSS experiments",
    "Getting better at TypeScript",
  ],
  timeline: [
    {
      year: "2024",
      title: "Started FDND @ HvA",
      detail: "Moved to Amsterdam, dove into frontend design & development.",
    },
    {
      year: "2025",
      title: "2nd year + real projects",
      detail:
        "More team work, more deployed pages, more 'oh that broke on mobile'.",
    },
    {
      year: "2026",
      title: "Portfolio + internship hunt",
      detail:
        "Building this site, documenting learning, looking for a place to grow.",
    },
  ] satisfies TimelineEntry[],
  funFacts: [
    "I reorganise my folders when I'm stressed",
    "Dark mode is default after 9pm",
    "I have strong opinions about line-height",
    "Coffee count: yes",
  ],
} as const;
