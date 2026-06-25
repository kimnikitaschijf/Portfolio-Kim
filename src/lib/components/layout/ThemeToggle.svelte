<script lang="ts">
  let isDark = $state(false);

  $effect(() => {
    isDark = document.documentElement.getAttribute("data-theme") === "dark";
  });

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    isDark = next === "dark";
  }
</script>

<button
  type="button"
  class="theme-btn"
  onclick={toggleTheme}
  aria-label={isDark ? "Light mode" : "Dark mode"}
>
  {isDark ? "☀" : "☾"}
</button>
