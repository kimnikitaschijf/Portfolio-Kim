<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import ConnectSection from "$lib/components/sections/ConnectSection.svelte";
</script>

<PageMeta title="Contact" description="Get in touch with Kim Nikita Schijf." />

<PageShell compactBottom>
  <PageHeader
    title="Say hi"
    subtitle="Internship, school project, collab, or just hello — I'd love to hear from you."
  />
  <ConnectSection showHeader={false} flush />
</PageShell>
