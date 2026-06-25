<script lang="ts">
  import { externalAttrs } from "$lib/utils/links";

  let {
    label = undefined,
    title,
    text,
    href = undefined,
    hrefLabel = "Read more →",
    external = href?.startsWith("http") ?? false,
  }: {
    label?: string;
    title: string;
    text: string;
    href?: string;
    hrefLabel?: string;
    external?: boolean;
  } = $props();
</script>

<article class="surface-card info-card">
  {#if label}
    <p class="info-card__label mono">{label}</p>
  {/if}
  <h2 class="info-card__title">{title}</h2>
  <p class="info-card__text">{text}</p>
  {#if href}
    <a class="link-arrow" {href} {...externalAttrs(external)}>{hrefLabel}</a>
  {/if}
</article>
