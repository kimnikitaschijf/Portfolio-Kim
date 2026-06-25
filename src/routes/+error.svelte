<script lang="ts">
  import { page } from "$app/state";
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import { errors } from "$lib/data/site";
  import { pageTitle } from "$lib/utils/meta";

  let { status = 404, error }: { status?: number; error?: Error } = $props();
</script>

<svelte:head>
  <title>{pageTitle(String(status))}</title>
</svelte:head>

<PageShell centered>
  <p class="error__code mono">{status}</p>
  <h1 class="error__title">
    {#if status === 404}
      {errors.notFound.title}
    {:else}
      {errors.generic.title}
    {/if}
  </h1>
  <p class="error__text">
    {#if status === 404}
      {errors.notFound.text}
    {:else}
      {error?.message ?? errors.generic.fallbackMessage}
    {/if}
  </p>

  {#if status === 404}
    <p class="error__hint mono">{errors.notFound.hint}</p>
  {/if}

  <p class="page-footer page-footer--centered">
    <a class="link-arrow" href={errors.footer.home.href}>{errors.footer.home.label}</a>
    {#if page.url.pathname !== "/work"}
      · <a class="link-arrow" href={errors.footer.work.href}>{errors.footer.work.label}</a>
    {/if}
  </p>
</PageShell>
