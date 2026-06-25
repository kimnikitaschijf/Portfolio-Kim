<script lang="ts">
  import type { Project } from "$lib/data/types";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
  import ProjectCard from "$lib/components/ui/ProjectCard.svelte";
  import { externalAttrs } from "$lib/utils/links";

  let {
    projects,
    showHeader = true,
    inPage = false,
  }: {
    projects: Project[];
    showHeader?: boolean;
    inPage?: boolean;
  } = $props();
</script>

<SectionBlock
  id="work"
  title={showHeader ? "Work" : undefined}
  subtitle={showHeader ? "School projects, notes, and experiments." : undefined}
  {inPage}
  bordered={!inPage}
>
  {#if !showHeader}
    <h2 id="work-heading" class="visually-hidden">Work</h2>
  {/if}

  <ul class="grid-2" role="list">
    {#each projects as project (project.slug)}
      <li>
        {#if project.href}
          <a class="gallery-link" href={project.href} {...externalAttrs(project.href.startsWith("http"))}>
            <ProjectCard {project} variant="full" />
            <span class="visually-hidden"> — open project</span>
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
