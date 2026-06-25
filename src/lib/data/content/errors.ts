export const errors = {
  notFound: {
    title: "This page doesn't exist",
    text: "Maybe it moved, maybe it never existed, maybe you found a broken link. Happens.",
    hint: "Hint: not everything on this site is linked from the menu.",
  },
  generic: {
    title: "Something went wrong",
    fallbackMessage: "An unexpected error occurred.",
  },
  footer: {
    home: { href: "/", label: "Back home →" },
    work: { href: "/work", label: "See my work →" },
  },
} as const;
