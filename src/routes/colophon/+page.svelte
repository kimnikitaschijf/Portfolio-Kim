<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import ContentBlock from "$lib/components/ui/ContentBlock.svelte";
  import { colophon } from "$lib/data/site";
</script>

<PageMeta title="Colophon" description="How this site was built." />

<PageShell>
  <PageHeader
    title="Colophon"
    subtitle="The boring-but-useful page about how this site is made."
  />

  <ContentBlock id="stack-heading" title="Stack">
    <ul class="tag-list">
      {#each colophon.stack as item (item)}
        <li>{item}</li>
      {/each}
    </ul>
  </ContentBlock>

  <ContentBlock id="fonts-heading" title="Typography">
    <dl class="def-list">
      {#each colophon.fonts as font (font.name)}
        <div class="def-list__row">
          <dt>{font.name}</dt>
          <dd class="mono">{font.role}</dd>
        </div>
      {/each}
    </dl>
  </ContentBlock>

  <ContentBlock id="credits-heading" title="Credits">
    <ul class="bullet-list">
      {#each colophon.credits as line (line)}
        <li>{line}</li>
      {/each}
    </ul>
  </ContentBlock>

  <p class="mono content text-muted stack-10" style="font-style: italic">
    {colophon.easterEggHint}
  </p>

  <p class="page-footer">
    <a class="link-arrow" href="/">Home →</a>
    ·
    <a
      class="link-arrow"
      href="https://github.com/kimnikitaschijf/Portfolio-Kim"
      target="_blank"
      rel="noopener noreferrer"
    >
      Source on GitHub →
    </a>
  </p>
</PageShell>
