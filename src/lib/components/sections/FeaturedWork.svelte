<script lang="ts">
  import type { Project } from "$lib/data/types";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
  import ProjectCard from "$lib/components/ui/ProjectCard.svelte";

  let { projects }: { projects: Project[] } = $props();
</script>

<SectionBlock
  id="featured"
  title="Selected work"
  subtitle="A few things I've been building lately."
  bordered
>
  <ul class="grid-3 stack-8">
    {#each projects as project (project.slug)}
      <li>
        <ProjectCard {project} variant="compact" />
      </li>
    {/each}
  </ul>

  <p>
    <a class="link-arrow" href="/work">All projects →</a>
  </p>
</SectionBlock>
