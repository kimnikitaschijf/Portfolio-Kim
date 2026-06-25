/** Returns target/rel attrs for external links. */
export function externalAttrs(external?: boolean) {
  return external
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : ({} as const);
}
