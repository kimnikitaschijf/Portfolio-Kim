<script lang="ts">
  import { about, site } from '$lib/data/site';
</script>

<section class="meet section" aria-labelledby="meet-heading">
  <div class="wrap meet__grid">
    <figure class="meet__visual">
      <img
        class="meet__photo"
        src={site.portrait}
        alt="Portrait of {site.fullName}"
        width="520"
        height="693"
        decoding="async"
        fetchpriority="high"
      />
    </figure>

    <div class="meet__text">
      <h2 id="meet-heading" class="meet__heading">Hi, I'm {site.name}</h2>
      <p class="meet__hello">{about.hello}</p>
      <p class="meet__detail mono">{site.school} · {site.location}</p>
      <a class="link-arrow" href="#about">More about me →</a>
    </div>
  </div>
</section>

<style>
  .meet__grid {
    display: grid;
    gap: var(--space-8);
    align-items: center;
  }

  @media (min-width: 768px) {
    .meet__grid {
      grid-template-columns: min(16rem, 40vw) 1fr;
      gap: var(--space-12);
    }
  }

  .meet__visual {
    margin: 0;
  }

  .meet__photo {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center 15%;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
  }

  .meet__heading {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-4);
  }

  .meet__hello {
    font-size: var(--text-lg);
    max-width: 36rem;
    margin-bottom: var(--space-4);
    line-height: 1.6;
  }

  .meet__detail {
    color: var(--text-muted);
    margin-bottom: var(--space-6);
  }
</style>
