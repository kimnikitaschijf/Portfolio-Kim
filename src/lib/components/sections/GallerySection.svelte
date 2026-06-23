<script lang="ts">
  import type { Project } from '$lib/data/site';
  import type { Snippet } from 'svelte';

  let { projects }: { projects: Project[] } = $props();
</script>

{#snippet projectCard(project: Project)}
  <article class="card">
    <div class="card__media">
      <img
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        width="400"
        height="500"
      />
    </div>
    <div class="card__body">
      <p class="card__category mono">{project.category}</p>
      <h3 class="card__title">{project.title}</h3>
      <p class="card__desc">{project.description}</p>
      {#if project.note}
        <p class="card__note">{project.note}</p>
      {/if}
      {#if !project.href}
        <p class="card__soon mono">coming soon</p>
      {/if}
    </div>
  </article>
{/snippet}

<section id="work" class="gallery section" aria-labelledby="work-heading">
  <div class="wrap">
    <header class="gallery__head">
      <h2 id="work-heading" class="gallery__title">Work</h2>
      <p class="gallery__sub">School projects, notes, and experiments.</p>
    </header>

    <ul class="gallery__grid" role="list">
      {#each projects as project, i (project.title)}
        <li class="gallery__item">
          {#if project.href}
            <a class="gallery__link" href={project.href}>
              {@render projectCard(project)}
              <span class="visually-hidden"> — open project</span>
            </a>
          {:else}
            <div class="gallery__link gallery__link--static">
              {@render projectCard(project)}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .gallery__head {
    margin-bottom: var(--space-8);
    max-width: 36rem;
  }

  .gallery__title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-2);
  }

  .gallery__sub {
    color: var(--text-muted);
  }

  .gallery__grid {
    display: grid;
    gap: var(--space-5);
    list-style: none;
  }

  @media (min-width: 640px) {
    .gallery__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .gallery__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-6);
    }
  }

  .gallery__link {
    display: block;
    height: 100%;
    color: inherit;
    text-decoration: none;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    overflow: hidden;
    transition:
      border-color var(--transition),
      box-shadow var(--transition);
  }

  .gallery__link:not(.gallery__link--static):hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-md);
  }

  .card__media {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--bg-muted);
  }

  .card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__body {
    padding: var(--space-5);
  }

  .card__category {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: var(--space-2);
  }

  .card__title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    margin-bottom: var(--space-2);
  }

  .card__desc {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.55;
  }

  .card__note {
    margin-top: var(--space-2);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--accent);
  }

  .card__soon {
    margin-top: var(--space-3);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
</style>
