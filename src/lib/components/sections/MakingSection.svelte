<script lang="ts">
  import type { MakingItem } from '$lib/data/site';

  let { items }: { items: MakingItem[] } = $props();
</script>

<section id="making" class="making section" aria-labelledby="making-heading">
  <div class="wrap">
    <header class="making__head">
      <h2 id="making-heading" class="making__title">What I make & do</h2>
      <p class="making__sub">What I spend my time on as a student.</p>
    </header>

    <ul class="making__list" role="list">
      {#each items as item (item.title)}
        <li>
          <article class="making__card">
            <h3 class="making__name">{item.title}</h3>
            <p class="making__text">{item.description}</p>
          </article>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .making {
    border-top: 1px solid var(--border);
  }

  .making__head {
    margin-bottom: var(--space-8);
    max-width: 36rem;
  }

  .making__title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-2);
  }

  .making__sub {
    color: var(--text-muted);
  }

  .making__list {
    display: grid;
    gap: var(--space-4);
    list-style: none;
  }

  @media (min-width: 640px) {
    .making__list {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-5);
    }
  }

  .making__card {
    height: 100%;
    padding: var(--space-6);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }

  .making__name {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: var(--space-3);
  }

  .making__text {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.65;
  }
</style>
