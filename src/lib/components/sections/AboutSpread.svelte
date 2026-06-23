<script lang="ts">
  import { about, contentsLinks } from '$lib/data/site';
</script>

<section id="about" class="about section" aria-labelledby="about-heading">
  <div class="wrap">
    <h2 id="about-heading" class="about__title">About</h2>

    <div class="about__grid">
      <div class="prose about__prose">
        <p>{about.intro}</p>
        <p>{about.paragraphs[0]}</p>
      </div>

      <aside class="about__aside" aria-label="Quick facts">
        <blockquote class="about__quote">"{about.aside}"</blockquote>
        <dl class="about__facts">
          {#each about.facts as fact (fact.label)}
            <div class="about__fact">
              <dt class="mono">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          {/each}
        </dl>
      </aside>
    </div>

    <p class="about__more">
      <a class="link-arrow" href="/about">Full about page →</a>
    </p>

    <nav class="contents" aria-label="On this page">
      <h3 class="contents__title mono">On this page</h3>
      <ul class="contents__list">
        {#each contentsLinks as link (link.href)}
          <li>
            <a href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</section>

<style>
  .about {
    border-top: 1px solid var(--border);
  }

  .about__title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-8);
  }

  .about__grid {
    display: grid;
    gap: var(--space-8);
    margin-bottom: var(--space-8);
  }

  @media (min-width: 768px) {
    .about__grid {
      grid-template-columns: 1.4fr 1fr;
      gap: var(--space-10);
      align-items: start;
    }
  }

  .about__prose {
    max-width: 40rem;
  }

  .about__aside {
    padding: var(--space-6);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }

  .about__quote {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-style: italic;
    line-height: 1.45;
    margin-bottom: var(--space-6);
  }

  .about__facts {
    display: grid;
    gap: var(--space-4);
  }

  .about__fact dt {
    color: var(--text-muted);
    margin-bottom: var(--space-1);
    text-transform: lowercase;
  }

  .about__fact dd {
    font-weight: 600;
  }

  .about__more {
    margin-bottom: var(--space-10);
  }

  .contents {
    padding-top: var(--space-8);
    border-top: 1px solid var(--border);
  }

  .contents__title {
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-4);
  }

  .contents__list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3) var(--space-6);
    list-style: none;
  }

  .contents__list a {
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
</style>
