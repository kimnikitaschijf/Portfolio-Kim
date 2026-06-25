<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import ContentBlock from "$lib/components/ui/ContentBlock.svelte";
  import { externalAttrs } from "$lib/utils/links";
  import { colophon, pages, ui } from "$lib/data/site";

  const page = pages.colophon;
</script>

<PageMeta title={page.meta.title} description={page.meta.description} />

<PageShell>
  <PageHeader title={page.header.title} subtitle={page.header.subtitle} />

  <ContentBlock id={page.sections.stack.id} title={page.sections.stack.title}>
    <ul class="tag-list" role="list">
      {#each colophon.stack as item (item)}
        <li>{item}</li>
      {/each}
    </ul>
  </ContentBlock>

  <ContentBlock id={page.sections.fonts.id} title={page.sections.fonts.title}>
    <dl class="def-list">
      {#each colophon.fonts as font (font.name)}
        <div class="def-list__row">
          <dt>{font.name}</dt>
          <dd class="mono">{font.role}</dd>
        </div>
      {/each}
    </dl>
  </ContentBlock>

  <ContentBlock id={page.sections.credits.id} title={page.sections.credits.title}>
    <ul class="bullet-list">
      {#each colophon.credits as line (line)}
        <li>{line}</li>
      {/each}
    </ul>
  </ContentBlock>

  <p class="mono content text-muted text-italic stack-10">
    {colophon.easterEggHint}
  </p>

  <p class="page-footer">
    {#each page.footer as link, i (link.href)}
      {#if i > 0}·{/if}
      {#if link.external}
        <a class="link-arrow" href={link.href} {...externalAttrs(true)}>
          {link.label}<span class="visually-hidden"> {ui.externalTabHint}</span>
        </a>
      {:else}
        <a class="link-arrow" href={link.href}>{link.label}</a>
      {/if}
    {/each}
  </p>
</PageShell>
