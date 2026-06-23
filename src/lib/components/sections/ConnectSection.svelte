<script lang="ts">
  import { contactLinks, site } from '$lib/data/site';
</script>

<section id="contact" class="connect section" aria-labelledby="contact-heading">
  <div class="wrap connect__inner">
    <h2 id="contact-heading" class="connect__title">Say hi</h2>
    <p class="connect__lede">
      Internship, school project, or just hello — pick whatever works best:
    </p>

    <ul class="connect__links" role="list">
      {#each contactLinks as link (link.label)}
        <li>
          <a
            class="connect__link"
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            <span class="connect__link-label">{link.label}</span>
            <span class="connect__link-sub mono">{link.sub}</span>
            {#if link.external}
              <span class="visually-hidden">(opens in new tab)</span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>

    <p class="connect__extra mono">
      <a href={site.moodboard} target="_blank" rel="noopener noreferrer">Pinterest moodboard</a>
    </p>
  </div>
</section>

<style>
  .connect {
    background: var(--bg-muted);
    border-top: 1px solid var(--border);
  }

  .connect__title {
    font-family: var(--font-display);
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-3);
  }

  .connect__lede {
    color: var(--text-muted);
    max-width: 32rem;
    margin-bottom: var(--space-8);
    line-height: 1.65;
  }

  .connect__links {
    display: grid;
    gap: var(--space-3);
    list-style: none;
    margin-bottom: var(--space-6);
  }

  @media (min-width: 480px) {
    .connect__links {
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-4);
    }
  }

  .connect__link {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-5);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    color: var(--text);
    text-decoration: none;
    transition:
      border-color var(--transition),
      box-shadow var(--transition);
  }

  .connect__link:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-md);
  }

  .connect__link-label {
    font-weight: 700;
  }

  .connect__link-sub {
    font-size: var(--text-xs);
    color: var(--text-muted);
    word-break: break-all;
  }

  .connect__extra a {
    color: var(--text-muted);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .connect__extra a:hover {
    color: var(--accent);
  }
</style>
