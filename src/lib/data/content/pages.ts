import { site } from "$lib/data/config";

export const now = {
  updated: "June 2026",
  intro:
    "A /now page is a public answer to 'what are you up to?' — stolen from Derek Sivers, adapted for a student who drinks too much coffee.",
  items: [
    {
      area: "Studying",
      text: "Just graduated FDND @ HvA. Starting Creative Business there next school year.",
    },
    {
      area: "Working",
      text: "Internship at Hypersolid in Alkmaar — Smart TV team, January through July 2026.",
    },
    {
      area: "Building",
      text: "This portfolio (obviously), plus whatever I'm shipping at Hypersolid.",
    },
    {
      area: "Learning",
      text: "SvelteKit, TypeScript, semantic HTML, and how Smart TV products actually get built.",
    },
    {
      area: "Based in",
      text: "Heerhugowaard — I didn't move to Amsterdam, I just commute to the HvA (and Alkmaar).",
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
  back: { href: "/", label: "Back to the normal site →" },
} as const;

/** Per-route titles, meta, section labels, and CTAs — single source for all pages. */
export const pages = {
  about: {
    meta: {
      title: "About",
      description:
        "More about Kim Nikita Schijf — FDND graduate, frontend, Heerhugowaard.",
    },
    header: { title: "About me" },
    sections: {
      skills: { id: "skills-heading", title: "Skills & tools" },
      timeline: { id: "timeline-heading", title: "Timeline" },
      facts: { id: "facts-heading", title: "Quick facts" },
      currently: {
        id: "now-heading",
        title: "Right now",
        cta: { href: "/now", label: "Full /now page →" },
      },
      fun: { id: "fun-heading", title: "Random facts" },
    },
    footer: [
      { href: "/work", label: "See my work →" },
      { href: "/contact", label: "Say hi →" },
    ],
  },
  work: {
    meta: {
      title: "Work",
      description:
        "Projects, school work, and experiments by Kim Nikita Schijf.",
    },
    header: {
      title: "Work",
      subtitle:
        "School projects, this portfolio, learning notes, and the messy sandbox folder.",
    },
    gallery: {
      id: "work",
      title: "Work",
      subtitle: "School projects, notes, and experiments.",
      hiddenTitle: "Work",
    },
  },
  notes: {
    meta: {
      title: "Notes",
      description: "Learning notes and weekly reflections from FDND.",
    },
    header: {
      title: "Learning notes",
      subtitle:
        "Highlights from my FDND wiki — the honest version, not the polished one.",
    },
    intro: {
      before: "I write weekly entries on",
      linkLabel: "my GitHub wiki",
      after: "These are the ones I'd actually re-read.",
    },
    cardLinkLabel: "Read on wiki →",
    footer: { href: site.wiki, label: "Full wiki on GitHub →", external: true },
  },
  now: {
    meta: {
      title: "Now",
      description: "What Kim is focused on right now.",
    },
    header: { title: "Now" },
    updatedPrefix: "Last updated:",
    credit: {
      before: "Inspired by",
      link: {
        href: "https://nownownow.com",
        label: "nownownow.com",
        external: true,
      },
    },
    footer: { href: "/contact", label: "Say hi →" },
  },
  contact: {
    meta: {
      title: "Contact",
      description: "Get in touch with Kim Nikita Schijf.",
    },
    header: {
      title: "Say hi",
      subtitle:
        "School project, collab, or just hello — I'd love to hear from you.",
    },
    connect: {
      id: "contact",
      title: "Say hi",
      subtitle:
        "School project, collab, or just hello — pick whatever works best:",
      hiddenTitle: "Say hi",
      moodboardLabel: "Pinterest moodboard",
    },
  },
  colophon: {
    meta: {
      title: "Colophon",
      description: "How this site was built.",
    },
    header: {
      title: "Colophon",
      subtitle: "The boring-but-useful page about how this site is made.",
    },
    sections: {
      stack: { id: "stack-heading", title: "Stack" },
      fonts: { id: "fonts-heading", title: "Typography" },
      credits: { id: "credits-heading", title: "Credits" },
    },
    footer: [
      { href: "/", label: "Home →", external: false },
      {
        href: "https://github.com/kimnikitaschijf/Portfolio-Kim",
        label: "Source on GitHub →",
        external: true,
      },
    ],
  },
  secret: {
    meta: { title: "???", noindex: true as const },
  },
} as const;
