<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import InfoCard from "$lib/components/ui/InfoCard.svelte";
  import { now, pages, ui } from "$lib/data/site";

  const page = pages.now;
</script>

<PageMeta title={page.meta.title} description={page.meta.description} />

<PageShell>
  <PageHeader title={page.header.title} subtitle={now.intro} />

  <p class="mono text-muted stack-8">{page.updatedPrefix} {now.updated}</p>

  <ul class="grid-2 stack-10" role="list">
    {#each now.items as item (item.area)}
      <li>
        <InfoCard title={item.area} text={item.text} titleSmall />
      </li>
    {/each}
  </ul>

  <p class="page-footer">
    {page.credit.before}
    <a
      class="link-arrow"
      href={page.credit.link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {page.credit.link.label}<span class="visually-hidden"> {ui.externalTabHint}</span>
    </a>
    ·
    <a class="link-arrow" href={page.footer.href}>{page.footer.label}</a>
  </p>
</PageShell>
