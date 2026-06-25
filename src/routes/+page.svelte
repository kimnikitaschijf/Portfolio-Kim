<script lang="ts">
  import CoverHero from "$lib/components/sections/CoverHero.svelte";
  import MeetSection from "$lib/components/sections/MeetSection.svelte";
  import FeaturedWork from "$lib/components/sections/FeaturedWork.svelte";
  import ExploreSection from "$lib/components/sections/ExploreSection.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import { featuredProjects } from "$lib/data/site";
</script>

<PageMeta />

<CoverHero />
<MeetSection />
<FeaturedWork projects={featuredProjects} />
<ExploreSection />
