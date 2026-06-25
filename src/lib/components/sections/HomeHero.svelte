<script lang="ts">
  import { about, home, site } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
</script>

<SectionBlock id={home.hero.id} hero ariaLabel={home.hero.ariaLabel}>
  <div class="home-intro">
    <p class="home-intro__meta mono">{site.school} · {site.year}</p>

    <div class="home-intro__opening">
      <figure class="home-intro__figure">
        <img
          class="home-intro__photo meet__photo"
          src={site.portrait}
          alt={home.hero.portraitAlt(site.fullName)}
          width="400"
          height="400"
          decoding="async"
          fetchpriority="high"
        />
      </figure>
      <p class="home-intro__lede">{about.hello}</p>
    </div>

    <h1 class="home-intro__name">
      <span class="script-accent">Kim</span> Nikita Schijf
    </h1>
    <p class="home-intro__role">{site.role}</p>

    <footer class="home-intro__foot">
      <div class="home-intro__links">
        {#each home.hero.ctas as cta (cta.href)}
          <a class="link-arrow" href={cta.href}>{cta.label}</a>
        {/each}
      </div>
      <p class="home-intro__loc mono">{site.location}</p>
    </footer>
  </div>
</SectionBlock>
