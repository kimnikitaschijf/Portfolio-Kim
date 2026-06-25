<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import GallerySection from "$lib/components/sections/GallerySection.svelte";
  import { pages, projects } from "$lib/data/site";

  const page = pages.work;
</script>

<PageMeta title={page.meta.title} description={page.meta.description} />

<PageShell compactBottom>
  <PageHeader title={page.header.title} subtitle={page.header.subtitle} />
  <GallerySection {projects} showHeader={false} inPage />
</PageShell>
