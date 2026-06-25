<script lang="ts">
  import '$lib/styles/global.css';
  import SiteNav from '$lib/components/layout/SiteNav.svelte';
  import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
  import ThemeToggle from '$lib/components/layout/ThemeToggle.svelte';
  import EasterEggToast from '$lib/components/ui/EasterEggToast.svelte';
  import { initEasterEggs } from '$lib/scripts/easter-eggs';
  import { onMount } from 'svelte';

  let { children } = $props();
  let toast: EasterEggToast;

  onMount(() => {
    const cleanup = initEasterEggs((msg) => toast.show(msg));
    return cleanup;
  });
</script>

<SiteNav />

<main id="main-content" tabindex="-1">
  {@render children()}
</main>

<SiteFooter />
<ThemeToggle />
<EasterEggToast bind:this={toast} />

<style>
  main {
    min-height: calc(100vh - 8rem);
  }
</style>
