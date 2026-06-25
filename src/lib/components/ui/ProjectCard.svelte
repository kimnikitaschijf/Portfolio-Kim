<script lang="ts">
  import type { Project } from "$lib/data/types";
  import { externalAttrs } from "$lib/utils/links";

  let {
    project,
    variant = "full",
    href = undefined,
    external = undefined,
  }: {
    project: Project;
    variant?: "full" | "compact";
    href?: string;
    external?: boolean;
  } = $props();

  const linkHref = $derived(href ?? project.href);
  const isExternal = $derived(external ?? linkHref?.startsWith("http") ?? false);
  const description = $derived(
    variant === "full"
      ? (project.longDescription ?? project.description)
      : project.description,
  );
</script>

<article class="project-card" class:project-card--compact={variant === "compact"}>
  <div class="project-card__media">
    <img
      src={project.image}
      alt=""
      loading="lazy"
      decoding="async"
      width="400"
      height={variant === "compact" ? 300 : 500}
    />
    {#if project.status && variant === "full"}
      <span class="project-card__status mono">{project.status}</span>
    {/if}
  </div>

  <div class="project-card__body">
    <p class="project-card__cat mono">{project.category}</p>
    <h3 class="project-card__title">{project.title}</h3>
    <p class="project-card__desc">{description}</p>

    {#if variant === "full" && project.tags?.length}
      <ul class="tag-list tag-list--sm project-card__tags" role="list">
        {#each project.tags as tag (tag)}
          <li>{tag}</li>
        {/each}
      </ul>
    {/if}

    {#if project.note}
      <p class="project-card__note">{project.note}</p>
    {/if}

    {#if variant === "compact" && linkHref}
      <a class="link-arrow" href={linkHref} {...externalAttrs(isExternal)}>View →</a>
    {:else if variant === "full" && !linkHref}
      <p class="project-card__soon mono">coming soon</p>
    {/if}
  </div>
</article>
