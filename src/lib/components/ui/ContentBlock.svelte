<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: Snippet;
  } = $props();
</script>

<section class="content-block" aria-labelledby={id}>
  <h2 {id} class="content-block__title">{title}</h2>
  {@render children()}
</section>
