<script lang="ts">
  import '$lib/styles/global.css';
  import SiteNav from '$lib/components/layout/SiteNav.svelte';
  import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
  import ThemeToggle from '$lib/components/layout/ThemeToggle.svelte';

  let { children } = $props();
</script>

<SiteNav />

<main id="main-content" tabindex="-1">
  {@render children()}
</main>

<SiteFooter />
<ThemeToggle />

<style>
  main {
    min-height: calc(100vh - 8rem);
  }
</style>
