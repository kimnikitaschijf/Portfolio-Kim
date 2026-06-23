<script lang="ts">
  import { site } from '$lib/data/site';
</script>

<footer class="foot">
  <div class="wrap foot__inner">
    <p class="foot__copy mono">{site.fullName} · {site.year}</p>
    <a class="foot__top" href="#main-content">Back to top</a>
  </div>
</footer>

<style>
  .foot {
    padding-block: var(--space-6);
    margin-bottom: calc(env(safe-area-inset-bottom, 0px) + 3.5rem);
    border-top: 1px solid var(--border);
  }

  .foot__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .foot__copy {
    color: var(--text-muted);
  }

  .foot__top {
    font-size: var(--text-sm);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
</style>
