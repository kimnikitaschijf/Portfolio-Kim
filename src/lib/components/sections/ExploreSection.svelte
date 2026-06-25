<script lang="ts">
  import { exploreLinks, home } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
</script>

<SectionBlock
  id={home.explore.id}
  title={home.explore.title}
  subtitle={home.explore.subtitle}
  bordered
  muted
>
  <ul class="explore-index" role="list">
    {#each exploreLinks as link, i (link.href)}
      <li>
        <a class="explore-index__link" href={link.href}>
          <span class="explore-index__num mono">{String(i + 1).padStart(2, "0")}</span>
          <span class="explore-index__label">{link.label}</span>
          <span class="explore-index__desc">{link.description}</span>
          <span class="explore-index__arrow" aria-hidden="true">→</span>
        </a>
      </li>
    {/each}
  </ul>
</SectionBlock>
