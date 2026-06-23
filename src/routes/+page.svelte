<script lang="ts">
  import CoverHero from '$lib/components/sections/CoverHero.svelte';
  import MeetSection from '$lib/components/sections/MeetSection.svelte';
  import AboutSpread from '$lib/components/sections/AboutSpread.svelte';
  import GallerySection from '$lib/components/sections/GallerySection.svelte';
  import MakingSection from '$lib/components/sections/MakingSection.svelte';
  import ConnectSection from '$lib/components/sections/ConnectSection.svelte';
  import { projects, making, site } from '$lib/data/site';
</script>

<svelte:head>
  <title>{site.fullName}</title>
  <meta
    name="description"
    content="Kim Nikita Schijf — FDND student. Work, notes, and contact."
  />
</svelte:head>

<CoverHero />
<MeetSection />
<AboutSpread />
<GallerySection {projects} />
<MakingSection items={making} />
<ConnectSection />
