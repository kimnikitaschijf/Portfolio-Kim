<script lang="ts">
  import { about, site } from '$lib/data/site';
</script>

<svelte:head>
  <title>About — {site.fullName}</title>
  <meta name="description" content="More about {site.fullName} — student, frontend, Amsterdam." />
</svelte:head>

<article class="about-page wrap">
  <header class="about-page__head">
    <a class="about-page__back mono" href="/">← Home</a>
    <h1 class="about-page__title">About me</h1>
    <p class="about-page__sub">{about.hello}</p>
  </header>

  <div class="prose about-page__body">
    <p>{about.intro}</p>
    {#each about.paragraphs as paragraph (paragraph)}
      <p>{paragraph}</p>
    {/each}
  </div>

  <section class="about-page__block" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="about-page__h">Skills & tools</h2>
    <ul class="about-page__tags">
      {#each about.skills as skill (skill)}
        <li>{skill}</li>
      {/each}
    </ul>
  </section>

  <section class="about-page__block" aria-labelledby="now-heading">
    <h2 id="now-heading" class="about-page__h">Right now</h2>
    <ul class="about-page__list">
      {#each about.currently as item (item)}
        <li>{item}</li>
      {/each}
    </ul>
  </section>

  <blockquote class="about-page__quote">"{about.aside}"</blockquote>

  <p class="about-page__cta">
    <a class="link-arrow" href="/#work">See my work →</a>
    ·
    <a class="link-arrow" href="/#contact">Say hi →</a>
  </p>
</article>

<style>
  .about-page {
    padding-block: var(--space-10) var(--space-16);
  }

  @media (min-width: 768px) {
    .about-page {
      padding-block: var(--space-16) var(--space-20);
    }
  }

  .about-page__back {
    display: inline-block;
    color: var(--text-muted);
    text-decoration: none;
    margin-bottom: var(--space-6);
  }

  .about-page__back:hover {
    color: var(--text);
  }

  .about-page__title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-4);
  }

  .about-page__sub {
    font-size: var(--text-lg);
    max-width: 36rem;
    margin-bottom: var(--space-10);
    line-height: 1.55;
  }

  .about-page__body {
    max-width: 40rem;
    margin-bottom: var(--space-12);
  }

  .about-page__block {
    max-width: 40rem;
    margin-bottom: var(--space-10);
    padding-top: var(--space-8);
    border-top: 1px solid var(--border);
  }

  .about-page__h {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: var(--space-5);
  }

  .about-page__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    list-style: none;
  }

  .about-page__tags li {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
  }

  .about-page__list {
    display: grid;
    gap: var(--space-3);
    padding-left: var(--space-5);
    color: var(--text-muted);
  }

  .about-page__quote {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-style: italic;
    max-width: 32rem;
    margin-bottom: var(--space-10);
    line-height: 1.4;
  }

  .about-page__cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-4);
    align-items: center;
  }
</style>
