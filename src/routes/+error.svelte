<script lang="ts">
  import { page } from "$app/state";
  import PageShell from "$lib/components/ui/PageShell.svelte";
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
      This page doesn't exist
    {:else}
      Something went wrong
    {/if}
  </h1>
  <p class="error__text">
    {#if status === 404}
      Maybe it moved, maybe it never existed, maybe you found a broken link. Happens.
    {:else}
      {error?.message ?? "An unexpected error occurred."}
    {/if}
  </p>

  {#if status === 404}
    <p class="error__hint mono">Hint: not everything on this site is linked from the menu.</p>
  {/if}

  <p class="page-footer" style="border-top: none; justify-content: center">
    <a class="link-arrow" href="/">Back home →</a>
    {#if page.url.pathname !== "/work"}
      · <a class="link-arrow" href="/work">See my work →</a>
    {/if}
  </p>
</PageShell>
