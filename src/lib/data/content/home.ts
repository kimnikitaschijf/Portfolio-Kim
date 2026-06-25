export const home = {
  meta: {
    description:
      "Kim Nikita Schijf — FDND graduate, intern @ Hypersolid. Work, learning notes, and contact.",
  },
  hero: {
    id: "home",
    ariaLabel: "Introduction",
    portraitAlt: (fullName: string) => `Portrait of ${fullName}`,
    ctas: [
      { href: "/about", label: "About me" },
      { href: "/work", label: "See work" },
    ],
  },
  featured: {
    id: "featured",
    title: "Selected work",
    subtitle: "A few things I've been building lately.",
    cta: { href: "/work", label: "All projects →" },
  },
  explore: {
    id: "explore",
    title: "Explore",
    subtitle: "More than a one-pager — dig in wherever you want.",
  },
  ticker: [
    "Frontend design",
    "Heerhugowaard",
    "Hypersolid",
    "SvelteKit",
    "Creative Business @ HvA",
  ],
} as const;
