/**
 * Site content and configuration.
 * Edit this file to update copy, links, and projects.
 */

export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  note?: string;
  /** Omit when the project is not linkable yet. */
  href?: string;
};

export type NavItem = { href: string; label: string };

export type MakingItem = {
  title: string;
  description: string;
};

export type AboutFact = {
  label: string;
  value: string;
};

export type ContactLink = {
  label: string;
  href: string;
  sub: string;
  external?: boolean;
};

export const site = {
  name: "Kim Nikita",
  fullName: "Kim Nikita Schijf",
  role: "Frontend Design & Development student",
  school: "FDND @ HvA, Amsterdam",
  location: "Heerhugowaard → Amsterdam",
  email: "kim.nikita.schijf@hva.nl",
  github: "https://github.com/kimnikitaschijf",
  linkedin: "https://www.linkedin.com/in/kim-nikita-schijf-85188236a/",
  year: 2026,
  portrait: "/IMG_0225.JPG",
  moodboard: "https://pin.it/2RanE4Gjo",
} as const;

export const about = {
  hello:
    "Hey — I'm Kim. 20, from Heerhugowaard, now studying in Amsterdam. I like making things on the web that feel calm and a bit human.",
  intro: `Most days I'm somewhere between Figma and VS Code, turning school briefs into real pages. I write stuff down as I go — not because it sounds professional, but because future-me always forgets what past-me figured out.`,
  paragraphs: [
    "I'm not pretending to have ten years of experience. I'd rather show what I'm actually working on, say when something's rough, and get better out loud.",
    "Little things matter to me: tab order that makes sense, copy that sounds like a person, layouts that don't fall apart on a phone. Boring details, but they make sites feel cared for.",
    "When I'm not coding I'm probably reorganising folders, updating my wiki, or drinking too much coffee in the HvA building.",
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
  ],
  currently: [
    "This portfolio (yes, still tweaking it)",
    "Weekly FDND learning notes",
    "Random CSS experiments",
  ],
} as const;

export const making: MakingItem[] = [
  {
    title: "School projects",
    description:
      "FDND briefs — from wireframe to deployed page. I document what worked and what I'd redo.",
  },
  {
    title: "Design → code",
    description:
      "Taking a layout and actually building it. Matching spacing, type, and states without losing the idea.",
  },
  {
    title: "Learning notes",
    description:
      "Weekly wiki entries. Messy middle included — that's usually where the learning happens.",
  },
  {
    title: "Small collabs",
    description:
      "Internships, team projects, tiny briefs. I'll tell you straight if the timeline is unrealistic.",
  },
];

export const projects: Project[] = [
  {
    title: "Learning Journal",
    category: "notes",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=750&fit=crop",
    href: "https://github.com/kimnikitaschijf/i-love-web/wiki",
    description: "Weekly reflections + what I actually learned",
    note: "my wiki",
  },
  {
    title: "We Love Web",
    category: "lectures",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=750&fit=crop",
    description: "Lecture notes from FDND web classes",
    note: "school",
  },
  {
    title: "Experiments",
    category: "play",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=750&fit=crop",
    description: "Small tests — layout ideas, components, vibes",
    note: "sandbox",
  },
  {
    title: "GitHub",
    category: "code",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=750&fit=crop",
    href: "https://github.com/kimnikitaschijf",
    description: "Repos, commits, the whole messy history",
    note: "→ github",
  },
];

export const navItems: NavItem[] = [
  { href: "/#about", label: "about" },
  { href: "/#work", label: "work" },
  { href: "/#contact", label: "say hi" },
];

export const contentsLinks = [
  { href: "/#about", label: "about me" },
  { href: "/#work", label: "my work" },
  { href: "/#making", label: "what I make" },
  { href: "/#contact", label: "contact" },
] as const;

export const contactLinks: ContactLink[] = [
  { label: "Email me", href: `mailto:${site.email}`, sub: site.email },
  {
    label: "GitHub",
    href: site.github,
    sub: "@kimnikitaschijf",
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    sub: "let's connect",
    external: true,
  },
];
