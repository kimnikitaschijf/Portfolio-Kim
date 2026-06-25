<script lang="ts">
  import type { Snippet } from "svelte";
  import SectionHeader from "$lib/components/ui/SectionHeader.svelte";

  let {
    id = undefined,
    title = undefined,
    subtitle = undefined,
    bordered = false,
    muted = false,
    inPage = false,
    flush = false,
    hero = false,
    ariaLabel = undefined,
    children,
  }: {
    id?: string;
    title?: string;
    subtitle?: string;
    bordered?: boolean;
    muted?: boolean;
    inPage?: boolean;
    flush?: boolean;
    hero?: boolean;
    ariaLabel?: string;
    children: Snippet;
  } = $props();

  const headingId = $derived(id ? `${id}-heading` : undefined);
</script>

<section
  {id}
  class="section-block"
  class:section-block--bordered={bordered}
  class:section-block--muted={muted}
  class:section-block--in-page={inPage}
  class:section-block--flush={flush}
  class:section-block--hero={hero}
  aria-label={!title ? ariaLabel : undefined}
  aria-labelledby={title ? headingId : undefined}
>
  {#if inPage}
    {#if title}
      <SectionHeader id={headingId} {title} {subtitle} />
    {/if}
    {@render children()}
  {:else}
    <div class="wrap">
      {#if title}
        <SectionHeader id={headingId} {title} {subtitle} />
      {/if}
      {@render children()}
    </div>
  {/if}
</section>
