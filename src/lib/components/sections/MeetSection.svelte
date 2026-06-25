<script lang="ts">
  import { about, site } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
</script>

<SectionBlock id="meet" bordered>
  <div class="meet-grid">
    <figure class="meet-grid__visual">
      <img
        class="meet-grid__photo meet__photo"
        src={site.portrait}
        alt="Portrait of {site.fullName}"
        width="520"
        height="693"
        decoding="async"
        fetchpriority="high"
      />
    </figure>

    <div class="meet-grid__text">
      <h2 id="meet-heading" class="meet-grid__heading">Hi, I'm {site.name}</h2>
      <p class="meet-grid__hello">{about.hello}</p>
      <p class="meet-grid__detail mono">{site.school} · {site.location}</p>
      <a class="link-arrow" href="/about">More about me →</a>
    </div>
  </div>
</SectionBlock>
