<script lang="ts">
  import { footerLinks, site } from "$lib/data/site";
</script>

<footer class="foot">
  <div class="wrap foot__inner">
    <div class="foot__left">
      <p class="foot__copy mono">{site.fullName} · {site.year}</p>
      <nav class="foot__nav" aria-label="Footer">
        <ul class="foot__links" role="list">
          {#each footerLinks as link (link.href)}
            <li>
              <a href={link.href}>{link.label}</a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
    <a class="foot__top" href="#main-content">Back to top</a>
  </div>
</footer>
