<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import InfoCard from "$lib/components/ui/InfoCard.svelte";
  import { externalAttrs } from "$lib/utils/links";
  import { noteEntries, pages, site, ui } from "$lib/data/site";

  const page = pages.notes;
</script>

<PageMeta title={page.meta.title} description={page.meta.description} />

<PageShell>
  <PageHeader title={page.header.title} subtitle={page.header.subtitle} />

  <p class="page-intro">
    {page.intro.before}
    <a class="link-arrow" href={site.wiki} {...externalAttrs(true)}>
      {page.intro.linkLabel}<span class="visually-hidden"> {ui.externalTabHint}</span>
    </a>.
    {page.intro.after}
  </p>

  <ul class="grid-2 stack-10" role="list">
    {#each noteEntries as entry (entry.title)}
      <li>
        <InfoCard
          label={entry.week}
          title={entry.title}
          text={entry.summary}
          href={entry.href}
          hrefLabel={page.cardLinkLabel}
        />
      </li>
    {/each}
  </ul>

  <p class="page-footer">
    <a class="link-arrow" href={page.footer.href} {...externalAttrs(page.footer.external)}>
      {page.footer.label}<span class="visually-hidden"> {ui.externalTabHint}</span>
    </a>
  </p>
</PageShell>
