/**
 * Barrel export — import from `$lib/data/site` as before.
 * Edit content in the files under `data/content/` and `data/config.ts`.
 */

export type * from "$lib/data/types";

export { site } from "$lib/data/config";
export { about } from "$lib/data/content/about";
export {
  projects,
  featuredProjectSlugs,
  featuredProjects,
} from "$lib/data/content/projects";
export { noteEntries } from "$lib/data/content/notes";
export { now, colophon, secretPage, pages } from "$lib/data/content/pages";
export { home } from "$lib/data/content/home";
export { ui } from "$lib/data/content/ui";
export { errors } from "$lib/data/content/errors";
export { easterEggs } from "$lib/data/content/easter-eggs";
export {
  navItems,
  exploreLinks,
  footerLinks,
  contactLinks,
} from "$lib/data/navigation";
