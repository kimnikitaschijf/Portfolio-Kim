import type { AboutFact, TimelineEntry } from "$lib/data/types";

export const about = {
  hello:
    "Hey — I'm Kim. 20, living in Heerhugowaard. I just graduated FDND at the HvA and I'm interning at Hypersolid in Alkmaar. I like making things on the web that feel calm and a bit human.",
  intro: `Most days I'm somewhere between Figma and VS Code — school briefs turned into real pages during FDND, and now the Smart TV team at Hypersolid. I write stuff down as I go — not because it sounds professional, but because future-me always forgets what past-me figured out.`,
  paragraphs: [
    "I'm not pretending to have ten years of experience. I'd rather show what I'm actually working on, say when something's rough, and get better out loud.",
    "Little things matter to me: tab order that makes sense, copy that sounds like a person, layouts that don't fall apart on a phone. Boring details, but they make sites feel cared for.",
    "When I'm not coding I'm probably reorganising folders, updating my wiki, or on the train to Alkmaar for my internship.",
    "This site is my little corner of the internet — part portfolio, part learning log, part 'look what I figured out this week'.",
  ],
  aside: "Accessible HTML, honest copy, no fake senior energy.",
  facts: [
    { label: "Right now", value: "Intern @ Hypersolid" },
    { label: "Based in", value: "Heerhugowaard" },
    { label: "Next up", value: "Creative Business @ HvA" },
    { label: "Into", value: "UI, a11y, Svelte" },
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
    "Internship at Hypersolid — Smart TV team (until July 2026)",
    "This portfolio (yes, still tweaking it)",
    "Getting ready for Creative Business @ HvA next school year",
    "Getting better at TypeScript",
  ],
  timeline: [
    {
      year: "2024",
      title: "Year 1 — FDND @ HvA",
      detail:
        "Started Frontend Design & Development and got my first real taste of frontend development.",
    },
    {
      year: "2025",
      title: "Year 2 — more projects",
      detail:
        "More team work, more deployed pages, and frameworks like Svelte on bigger briefs.",
    },
    {
      year: "2026",
      title: "Graduated + internship",
      detail:
        "Finished FDND, started interning at Hypersolid Alkmaar (Smart TV team, Jan–Jul). Creative Business at the HvA starts next school year.",
    },
  ] satisfies TimelineEntry[],
  funFacts: [
    "I reorganise my folders when I'm stressed",
    "Dark mode is default after 9pm",
    "I have strong opinions about line-height",
    "Coffee count: yes",
  ],
} as const;
