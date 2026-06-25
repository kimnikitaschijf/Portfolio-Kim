export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription?: string;
  note?: string;
  tags?: string[];
  year?: number;
  status?: "live" | "wip" | "archive";
  /** Omit when the project is not linkable yet. */
  href?: string;
};

export type NavItem = { href: string; label: string };

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

export type NoteEntry = {
  title: string;
  week: string;
  summary: string;
  href?: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  detail: string;
};

export type ExploreLink = {
  href: string;
  label: string;
  description: string;
};
