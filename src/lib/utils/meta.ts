import { site } from "$lib/data/config";

/** Formats a page title consistently across the site. */
export function pageTitle(page?: string) {
  return page ? `${page} — ${site.fullName}` : site.fullName;
}

/** Default meta description for pages that don't set one. */
export const defaultDescription = `${site.fullName} — ${site.role}. Work, notes, and contact.`;
