/**
 * Returns whether a nav item should show the active state.
 */
export function isNavItemActive(
  itemHref: string,
  pathname: string,
  _hash: string,
): boolean {
  if (itemHref.startsWith("/#")) {
    return pathname === "/" && itemHref === `/${_hash}`;
  }

  if (itemHref === "/") {
    return pathname === "/";
  }

  return pathname === itemHref || pathname.startsWith(`${itemHref}/`);
}
