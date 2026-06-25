<script lang="ts">
  import { pageTitle, defaultDescription } from "$lib/utils/meta";

  let {
    title = undefined,
    description = defaultDescription,
    noindex = false,
  }: {
    title?: string;
    description?: string;
    noindex?: boolean;
  } = $props();
</script>

<svelte:head>
  <title>{pageTitle(title)}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>
