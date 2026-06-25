<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import { pages, secretPage } from "$lib/data/site";

  const page = pages.secret;
</script>

<PageMeta title={page.meta.title} noindex={page.meta.noindex} />

<PageShell>
  <PageHeader title={secretPage.title} subtitle={secretPage.message} />

  <ul class="secret-facts" role="list">
    {#each secretPage.facts as fact (fact)}
      <li>{fact}</li>
    {/each}
  </ul>

  <p>
    <a class="link-arrow" href={secretPage.back.href}>{secretPage.back.label}</a>
  </p>
</PageShell>
