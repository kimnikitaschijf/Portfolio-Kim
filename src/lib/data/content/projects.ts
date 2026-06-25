import { site } from "$lib/data/config";
import type { Project } from "$lib/data/types";

export const projects: Project[] = [
  {
    slug: "learning-journal",
    title: "Learning Journal",
    category: "notes",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=750&fit=crop",
    href: site.wiki,
    description: "Weekly reflections + what I actually learned",
    longDescription:
      "My FDND learning wiki — weekly entries on what clicked, what didn't, and the bugs I stared at for too long. Honest notes, not polished essays.",
    note: "my wiki",
    tags: ["wiki", "reflection", "fdnd"],
    year: 2025,
    status: "live",
  },
  {
    slug: "we-love-web",
    title: "We Love Web",
    category: "lectures",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=750&fit=crop",
    description: "Lecture notes from FDND web classes",
    longDescription:
      "Notes and takeaways from We Love Web lectures — HTML semantics, CSS tricks, JS patterns, and the occasional rant about browser quirks.",
    note: "school",
    tags: ["lectures", "html", "css", "js"],
    year: 2025,
    status: "wip",
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    category: "site",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=750&fit=crop",
    href: "https://github.com/kimnikitaschijf/Portfolio-Kim",
    description: "SvelteKit site you're looking at right now",
    longDescription:
      "Built with SvelteKit, plain CSS, and a lot of tweaking. Deployed on Netlify. The meta project — documenting myself while building the thing that documents me.",
    note: "you are here",
    tags: ["sveltekit", "css", "netlify"],
    year: 2026,
    status: "live",
  },
  {
    slug: "experiments",
    title: "Experiments",
    category: "play",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=750&fit=crop",
    description: "Small tests — layout ideas, components, vibes",
    longDescription:
      "Sandbox folder for CSS grid tricks, hover states, micro-interactions, and 'what if I tried this at 11pm'. Not everything ships — some things are just for learning.",
    note: "sandbox",
    tags: ["css", "play", "components"],
    year: 2026,
    status: "wip",
  },
  {
    slug: "github",
    title: "GitHub",
    category: "code",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=750&fit=crop",
    href: site.github,
    description: "Repos, commits, the whole messy history",
    longDescription:
      "Where the actual code lives. School repos, side projects, and commit messages that range from helpful to 'fix fix fix'.",
    note: "→ github",
    tags: ["git", "repos"],
    year: 2026,
    status: "live",
  },
];

export const featuredProjectSlugs = [
  "learning-journal",
  "portfolio",
  "experiments",
] as const;

export const featuredProjects = projects.filter((p) =>
  featuredProjectSlugs.includes(
    p.slug as (typeof featuredProjectSlugs)[number],
  ),
);
