export const now = {
  updated: "June 2026",
  intro:
    "A /now page is a public answer to 'what are you up to?' — stolen from Derek Sivers, adapted for a student who drinks too much coffee.",
  items: [
    {
      area: "Studying",
      text: "2nd year FDND — frontend design, accessibility, and way more JavaScript than last year.",
    },
    {
      area: "Building",
      text: "This portfolio (obviously), plus school briefs that actually get deployed now.",
    },
    {
      area: "Learning",
      text: "SvelteKit, TypeScript, semantic HTML, and how to write copy that doesn't sound like a robot.",
    },
    {
      area: "Looking for",
      text: "Internship or part-time role where I can learn from people who've been doing this longer.",
    },
    {
      area: "Reading",
      text: "MDN docs, classmates' code reviews, and the occasional blog post at 1am.",
    },
    {
      area: "Not doing",
      text: "Pretending I know everything. Claiming 5 years of experience. Skipping the a11y checklist.",
    },
  ],
} as const;

export const colophon = {
  stack: ["SvelteKit 2", "Svelte 5", "TypeScript", "Plain CSS", "Netlify"],
  fonts: [
    { name: "Fraunces", role: "headings" },
    { name: "Outfit", role: "body" },
    { name: "IBM Plex Mono", role: "labels & code" },
  ],
  credits: [
    "Built by Kim Nikita Schijf",
    "No CSS framework — just custom properties and stubbornness",
    "Photos from Unsplash (project cards) + my own portrait",
  ],
  easterEggHint:
    "Some things on this site aren't obvious. Try clicking around.",
} as const;

export const secretPage = {
  title: "You found the secret room",
  message:
    "Okay so you either typed the Konami code, clicked my face too many times, or you're the kind of person who checks view-source. Respect.",
  facts: [
    "This page isn't linked anywhere on purpose",
    "The theme toggle rotates on hover (tiny joy)",
    "I left a console message for curious devs",
    "Type 'coffee' anywhere on the site for a surprise",
    "You're officially on the cool list now",
  ],
} as const;
