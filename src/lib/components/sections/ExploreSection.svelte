<script lang="ts">
  import { exploreLinks } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
</script>

<SectionBlock
  id="explore"
  title="Explore"
  subtitle="More than a one-pager — dig in wherever you want."
  bordered
  muted
>
  <ul class="grid-3">
    {#each exploreLinks as link (link.href)}
      <li>
        <a class="interactive-card explore-card" href={link.href}>
          <span class="explore-card__label">{link.label}</span>
          <span class="explore-card__desc">{link.description}</span>
          <span class="explore-card__arrow" aria-hidden="true">→</span>
        </a>
      </li>
    {/each}
  </ul>
</SectionBlock>
