<script lang="ts">
  import { ui } from "$lib/data/site";

  let {
    title,
    subtitle = undefined,
    backHref = "/",
    backLabel = ui.backHome,
  }: {
    title: string;
    subtitle?: string;
    backHref?: string;
    backLabel?: string;
  } = $props();
</script>

<header class="page-head">
  <a class="page-head__back mono" href={backHref}>{backLabel}</a>
  <h1 class="page-head__title">{title}</h1>
  {#if subtitle}
    <p class="page-head__sub">{subtitle}</p>
  {/if}
</header>
