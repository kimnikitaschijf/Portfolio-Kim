<script lang="ts">
  import { site } from "$lib/data/site";
  import SectionBlock from "$lib/components/ui/SectionBlock.svelte";
</script>

<SectionBlock hero bordered>
  <section class="hero" aria-label="Introduction">
    <h1 class="hero__title">{site.fullName}</h1>
    <p class="hero__role">{site.role}</p>
    <p class="hero__meta mono">{site.school} · {site.year}</p>
  </section>
</SectionBlock>
