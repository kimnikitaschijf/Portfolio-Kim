<script lang="ts">
  let isDark = $state(false);

  $effect(() => {
    isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  });

  function toggleTheme() {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
    isDark = next === 'dark';
  }
</script>

<button
  type="button"
  class="theme-btn"
  onclick={toggleTheme}
  aria-label={isDark ? 'Light mode' : 'Dark mode'}
>
  {isDark ? '☀' : '☾'}
</button>

<style>
  .theme-btn {
    position: fixed;
    right: max(var(--gutter), env(safe-area-inset-right, 0px));
    bottom: max(var(--space-4), env(safe-area-inset-bottom, 0px));
    z-index: 90;
    width: 2.75rem;
    height: 2.75rem;
    font-size: 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    cursor: pointer;
    box-shadow: 2px 3px 12px rgb(28 21 24 / 0.1);
    transition: transform var(--transition);
  }

  @media (prefers-reduced-motion: no-preference) {
    .theme-btn:hover {
      transform: rotate(-6deg);
    }
  }
</style>
