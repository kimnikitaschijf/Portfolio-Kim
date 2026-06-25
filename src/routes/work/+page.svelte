<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import GallerySection from "$lib/components/sections/GallerySection.svelte";
  import { projects } from "$lib/data/site";
</script>

<PageMeta
  title="Work"
  description="Projects, school work, and experiments by Kim Nikita Schijf."
/>

<PageShell compactBottom>
  <PageHeader
    title="Work"
    subtitle="School projects, this portfolio, learning notes, and the messy sandbox folder."
  />
  <GallerySection {projects} showHeader={false} inPage />
</PageShell>
