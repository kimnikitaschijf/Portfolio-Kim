<script lang="ts">
  import { page } from '$app/state';
  import { navItems, site } from '$lib/data/site';
  import { isNavItemActive } from '$lib/utils/nav';
</script>

<a href="#main-content" class="skip-link">Skip to content</a>

<header class="nav">
  <div class="wrap nav__inner">
    <a class="nav__home" href="/">
      <span class="nav__name">{site.name}</span>
    </a>

    <nav aria-label="Main">
      <ul class="nav__list" role="list">
        {#each navItems as item}
          <li>
            <a
              class="nav__link"
              class:nav__link--on={isNavItemActive(
                item.href,
                page.url.pathname,
                page.url.hash,
              )}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--nav-bg);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding-block: var(--space-3);
  }

  @media (min-width: 768px) {
    .nav__inner {
      padding-block: var(--space-4);
    }
  }

  .nav__home {
    text-decoration: none;
    flex-shrink: 0;
  }

  .nav__name {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--text);
  }

  .nav__list {
    display: flex;
    gap: var(--space-1);
    list-style: none;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .nav__list::-webkit-scrollbar {
    display: none;
  }

  .nav__link {
    display: block;
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-muted);
    border-radius: 999px;
    white-space: nowrap;
    transition:
      color var(--transition),
      background var(--transition);
  }

  .nav__link:hover {
    color: var(--text);
  }

  .nav__link--on {
    color: var(--accent-text);
    background: var(--accent);
  }
</style>
