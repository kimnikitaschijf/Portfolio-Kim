import { site } from "$lib/data/config";
import type { ContactLink, ExploreLink, NavItem } from "$lib/data/types";

export const navItems: NavItem[] = [
  { href: "/about", label: "about" },
  { href: "/work", label: "work" },
  { href: "/notes", label: "notes" },
  { href: "/contact", label: "say hi" },
];

export const exploreLinks: ExploreLink[] = [
  {
    href: "/about",
    label: "About me",
    description:
      "Who I am, what I care about, and my slightly chaotic timeline.",
  },
  {
    href: "/work",
    label: "Work",
    description: "School projects, this site, experiments, and my GitHub.",
  },
  {
    href: "/notes",
    label: "Learning notes",
    description: "Weekly wiki highlights — the messy middle of learning.",
  },
  {
    href: "/now",
    label: "Now",
    description: "What I'm focused on right now. Updated when things change.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Email, GitHub, LinkedIn — pick your adventure.",
  },
];

export const footerLinks = [
  ...exploreLinks.map((link) => ({ href: link.href, label: link.label })),
  { href: "/colophon", label: "Colophon" },
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
