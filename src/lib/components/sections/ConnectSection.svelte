<script lang="ts">
  import { contactLinks, site } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
  import { externalAttrs } from "$lib/utils/links";

  let {
    showHeader = true,
    flush = false,
  }: {
    showHeader?: boolean;
    flush?: boolean;
  } = $props();
</script>

<SectionBlock
  id="contact"
  title={showHeader ? "Say hi" : undefined}
  subtitle={showHeader
    ? "Internship, school project, or just hello — pick whatever works best:"
    : undefined}
  {flush}
  muted
  bordered={!flush}
>
  {#if !showHeader}
    <h2 id="contact-heading" class="visually-hidden">Say hi</h2>
  {/if}

  <ul class="connect-grid" role="list">
    {#each contactLinks as link (link.label)}
      <li>
        <a class="interactive-card connect-link" href={link.href} {...externalAttrs(link.external)}>
          <span class="connect-link__label">{link.label}</span>
          <span class="connect-link__sub mono">{link.sub}</span>
          {#if link.external}
            <span class="visually-hidden">(opens in new tab)</span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>

  <p class="connect-extra mono">
    <a href={site.moodboard} {...externalAttrs(true)}>Pinterest moodboard</a>
  </p>
</SectionBlock>
