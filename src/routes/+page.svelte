<script lang="ts">
  import HomeHero from "$lib/components/sections/HomeHero.svelte";
  import FeaturedWork from "$lib/components/sections/FeaturedWork.svelte";
  import ExploreSection from "$lib/components/sections/ExploreSection.svelte";
  import Marquee from "$lib/components/ui/Marquee.svelte";
  import WaveDivider from "$lib/components/ui/WaveDivider.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import { featuredProjects, home } from "$lib/data/site";
</script>

<PageMeta description={home.meta.description} />

<HomeHero />
<WaveDivider fill="var(--accent)" />
<Marquee items={home.ticker} />
<WaveDivider fill="var(--bg)" flip />
<FeaturedWork projects={featuredProjects} />
<WaveDivider fill="var(--bg-muted)" />
<ExploreSection />
