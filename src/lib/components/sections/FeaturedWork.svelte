<script lang="ts">
  import type { Project } from "$lib/data/types";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
  import { externalAttrs } from "$lib/utils/links";
  import { home, ui } from "$lib/data/site";

  let { projects }: { projects: Project[] } = $props();
</script>

<SectionBlock
  id={home.featured.id}
  title={home.featured.title}
  subtitle={home.featured.subtitle}
  bordered
>
  <ul class="featured-strip stack-8" role="list">
    {#each projects as project (project.slug)}
      <li>
        {#if project.href}
          <a
            class="featured-strip__link"
            href={project.href}
            {...externalAttrs(project.href.startsWith("http"))}
          >
            <img
              class="featured-strip__thumb"
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              width="112"
              height="84"
            />
            <div class="featured-strip__copy">
              <p class="featured-strip__cat mono">{project.category}</p>
              <p class="featured-strip__title">{project.title}</p>
              <p class="featured-strip__desc">{project.description}</p>
            </div>
            <span class="featured-strip__arrow" aria-hidden="true">→</span>
            <span class="visually-hidden">
              {ui.openProjectHint(project.title)}{#if project.href.startsWith("http")}
                {ui.externalTabHint}{/if}
            </span>
          </a>
        {:else}
          <div class="featured-strip__link featured-strip__link--static">
            <img
              class="featured-strip__thumb"
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              width="112"
              height="84"
            />
            <div class="featured-strip__copy">
              <p class="featured-strip__cat mono">{project.category}</p>
              <p class="featured-strip__title">{project.title}</p>
              <p class="featured-strip__desc">{project.description}</p>
            </div>
            <span class="featured-strip__soon mono">{ui.projectCard.soon}</span>
          </div>
        {/if}
      </li>
    {/each}
  </ul>

  <p>
    <a class="link-arrow" href={home.featured.cta.href}>{home.featured.cta.label}</a>
  </p>
</SectionBlock>
