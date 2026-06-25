<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import { now } from "$lib/data/site";
</script>

<PageMeta title="Now" description="What Kim is focused on right now." />

<PageShell>
  <PageHeader title="Now" subtitle={now.intro} />

  <p class="mono text-muted stack-8">Last updated: {now.updated}</p>

  <ul class="grid-2 stack-10">
    {#each now.items as item (item.area)}
      <li>
        <article class="surface-card info-card">
          <h2 class="info-card__title info-card__title--sm">{item.area}</h2>
          <p class="info-card__text">{item.text}</p>
        </article>
      </li>
    {/each}
  </ul>

  <p class="page-footer">
    Inspired by
    <a class="link-arrow" href="https://nownownow.com" target="_blank" rel="noopener noreferrer">
      nownownow.com
    </a>
    ·
    <a class="link-arrow" href="/contact">Say hi →</a>
  </p>
</PageShell>
