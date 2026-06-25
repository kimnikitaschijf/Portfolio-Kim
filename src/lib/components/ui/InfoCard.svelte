<script lang="ts">
  import { ui } from "$lib/data/site";
  import { externalAttrs } from "$lib/utils/links";

  let {
    label = undefined,
    title,
    text,
    href = undefined,
    hrefLabel = ui.infoCard.readMore,
    external = href?.startsWith("http") ?? false,
    titleSmall = false,
  }: {
    label?: string;
    title: string;
    text: string;
    href?: string;
    hrefLabel?: string;
    external?: boolean;
    titleSmall?: boolean;
  } = $props();
</script>

<article class="surface-card info-card">
  {#if label}
    <p class="info-card__label mono">{label}</p>
  {/if}
  <h2 class="info-card__title" class:info-card__title--sm={titleSmall}>{title}</h2>
  <p class="info-card__text">{text}</p>
  {#if href}
    <a class="link-arrow" {href} {...externalAttrs(external)}>
      {hrefLabel}
      {#if external}
        <span class="visually-hidden"> {ui.externalTabHint}</span>
      {/if}
    </a>
  {/if}
</article>
