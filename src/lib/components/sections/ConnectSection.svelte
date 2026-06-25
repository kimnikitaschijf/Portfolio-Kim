<script lang="ts">
  import { contactLinks, pages, site, ui } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
  import { externalAttrs } from "$lib/utils/links";

  let {
    showHeader = true,
    flush = false,
  }: {
    showHeader?: boolean;
    flush?: boolean;
  } = $props();

  const connect = pages.contact.connect;
</script>

<SectionBlock
  id={connect.id}
  title={showHeader ? connect.title : undefined}
  subtitle={showHeader ? connect.subtitle : undefined}
  {flush}
  muted
  bordered={!flush}
>
  {#if !showHeader}
    <h2 id="contact-heading" class="visually-hidden">{connect.hiddenTitle}</h2>
  {/if}

  <ul class="connect-grid" role="list">
    {#each contactLinks as link (link.label)}
      <li>
        <a class="interactive-card connect-link" href={link.href} {...externalAttrs(link.external)}>
          <span class="connect-link__label">{link.label}</span>
          <span class="connect-link__sub mono">{link.sub}</span>
          {#if link.external}
            <span class="visually-hidden">{ui.externalTabHint}</span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>

  <p class="connect-extra mono">
    <a href={site.moodboard} {...externalAttrs(true)}>
      {connect.moodboardLabel}<span class="visually-hidden"> {ui.externalTabHint}</span>
    </a>
  </p>
</SectionBlock>
