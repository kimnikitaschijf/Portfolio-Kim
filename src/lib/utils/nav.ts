/**
 * Returns whether a nav item should show the active state.
 */
export function isNavItemActive(
  itemHref: string,
  pathname: string,
  hash: string,
): boolean {
  if (itemHref.startsWith("/#")) {
    if (pathname !== "/") return false;
    return itemHref === `/${hash}`;
  }

  return pathname === itemHref;
}
