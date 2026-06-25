<script lang="ts">
  import type { Project } from "$lib/data/types";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
  import ProjectCard from "$lib/components/ui/ProjectCard.svelte";
  import { externalAttrs } from "$lib/utils/links";
  import { pages, ui } from "$lib/data/site";

  let {
    projects,
    showHeader = true,
    inPage = false,
  }: {
    projects: Project[];
    showHeader?: boolean;
    inPage?: boolean;
  } = $props();

  const gallery = pages.work.gallery;
</script>

<SectionBlock
  id={gallery.id}
  title={showHeader ? gallery.title : undefined}
  subtitle={showHeader ? gallery.subtitle : undefined}
  {inPage}
  bordered={!inPage}
>
  {#if !showHeader}
    <h2 id="work-heading" class="visually-hidden">{gallery.hiddenTitle}</h2>
  {/if}

  <ul class="grid-2" role="list">
    {#each projects as project (project.slug)}
      <li>
        {#if project.href}
          <a class="gallery-link" href={project.href} {...externalAttrs(project.href.startsWith("http"))}>
            <ProjectCard {project} variant="full" embedded heading={false} />
            <span class="visually-hidden">
              {ui.openProjectHint(project.title)}{#if project.href.startsWith("http")}
                {ui.externalTabHint}{/if}
            </span>
          </a>
        {:else}
          <div class="gallery-link gallery-link--static">
            <ProjectCard {project} variant="full" />
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</SectionBlock>
