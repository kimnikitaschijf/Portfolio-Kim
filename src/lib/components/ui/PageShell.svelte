<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    class: className = "",
    compactBottom = false,
    compactTop = false,
    centered = false,
  }: {
    children: Snippet;
    class?: string;
    compactBottom?: boolean;
    compactTop?: boolean;
    centered?: boolean;
  } = $props();
</script>

<article
  class="page wrap {className}"
  class:page--compact-bottom={compactBottom}
  class:page--compact-top={compactTop}
  class:page--centered={centered}
>
  {@render children()}
</article>
