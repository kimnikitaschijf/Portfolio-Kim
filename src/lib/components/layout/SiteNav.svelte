<script lang="ts">
  import { page } from "$app/state";
  import { navItems, site, ui } from "$lib/data/site";
  import { isNavItemActive } from "$lib/utils/nav";
</script>

<a href="#main-content" class="skip-link">{ui.skipLink}</a>

<header class="nav">
  <div class="wrap nav__inner">
    <a
      class="nav__home"
      href="/"
      aria-label={ui.homeNavLabel(site.fullName)}
      aria-current={page.url.pathname === "/" ? "page" : undefined}
    >
      <span class="nav__name" aria-hidden="true">{site.name}</span>
    </a>

    <nav aria-label={ui.mainNavLabel}>
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
              aria-current={isNavItemActive(
                item.href,
                page.url.pathname,
                page.url.hash,
              )
                ? "page"
                : undefined}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
