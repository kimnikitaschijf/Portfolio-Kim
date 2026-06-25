<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import InfoCard from "$lib/components/ui/InfoCard.svelte";
  import { externalAttrs } from "$lib/utils/links";
  import { noteEntries, site } from "$lib/data/site";
</script>

<PageMeta
  title="Notes"
  description="Learning notes and weekly reflections from FDND."
/>

<PageShell>
  <PageHeader
    title="Learning notes"
    subtitle="Highlights from my FDND wiki — the honest version, not the polished one."
  />

  <p class="page-intro">
    I write weekly entries on
    <a class="link-arrow" href={site.wiki} {...externalAttrs(true)}>my GitHub wiki</a>.
    These are the ones I'd actually re-read.
  </p>

  <ul class="grid-2 stack-10">
    {#each noteEntries as entry (entry.title)}
      <li>
        <InfoCard
          label={entry.week}
          title={entry.title}
          text={entry.summary}
          href={entry.href}
          hrefLabel="Read on wiki →"
        />
      </li>
    {/each}
  </ul>

  <p class="page-footer">
    <a class="link-arrow" href={site.wiki} {...externalAttrs(true)}>Full wiki on GitHub →</a>
  </p>
</PageShell>
