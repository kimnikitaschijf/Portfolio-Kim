<script lang="ts">
  import { site } from '$lib/data/site';
</script>

<section class="cover section" aria-label="Introduction">
  <div class="wrap cover__inner">
    <h1 class="cover__title">{site.fullName}</h1>
    <p class="cover__role">{site.role}</p>
    <p class="cover__meta mono">{site.school} · {site.year}</p>
  </div>
</section>

<style>
  .cover {
    padding-block: var(--space-16);
    border-bottom: 1px solid var(--border);
  }

  @media (min-width: 768px) {
    .cover {
      padding-block: var(--space-20);
    }
  }

  .cover__title {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-4);
  }

  .cover__role {
    font-size: var(--text-lg);
    margin-bottom: var(--space-2);
  }

  .cover__meta {
    color: var(--text-muted);
  }
</style>
