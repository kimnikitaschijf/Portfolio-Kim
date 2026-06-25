<script lang="ts">
  import { page } from "$app/state";
  import { navItems, site } from "$lib/data/site";
  import { isNavItemActive } from "$lib/utils/nav";
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
