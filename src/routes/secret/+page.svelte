<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import { secretPage } from "$lib/data/site";
</script>

<PageMeta title="???" noindex />

<PageShell>
  <PageHeader title={secretPage.title} subtitle={secretPage.message} />

  <ul class="secret-facts" role="list">
    {#each secretPage.facts as fact (fact)}
      <li>{fact}</li>
    {/each}
  </ul>

  <p>
    <a class="link-arrow" href="/">Back to the normal site →</a>
  </p>
</PageShell>
