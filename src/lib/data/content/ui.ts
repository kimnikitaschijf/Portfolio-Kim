/**
 * Shared UI labels — navigation chrome, cards, accessibility helpers.
 * Design can change; these strings stay stable unless copy edits are intended.
 */

export const ui = {
  skipLink: "Skip to content",
  backToTop: "Back to top",
  backHome: "← Home",
  homeNavLabel: (fullName: string) => `${fullName} — Home`,
  mainNavLabel: "Main",
  footerNavLabel: "Footer",
  externalTabHint: "(opens in new tab)",
  openProjectHint: (title: string) => `— open ${title}`,
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  projectCard: {
    view: "View →",
    comingSoon: "coming soon",
    statusPrefix: "Status: ",
    soon: "soon",
  },
  infoCard: {
    readMore: "Read more →",
  },
} as const;
