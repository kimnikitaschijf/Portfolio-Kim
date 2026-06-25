<script lang="ts">
  let {
    items,
    variant = "default",
  }: {
    items: readonly string[];
    variant?: "default" | "alt" | "yellow";
  } = $props();

  /** Repeat enough times so one group always fills wide viewports. */
  const REPEATS = 4;
  const sequence = $derived(
    Array.from({ length: REPEATS }, () => items).flat(),
  );
</script>

<div
  class="marquee-track"
  class:marquee-track--alt={variant === "alt"}
  class:marquee-track--yellow={variant === "yellow"}
  aria-hidden="true"
>
  <div class="marquee-inner">
    {#each [0, 1] as group (group)}
      <div class="marquee-group">
        {#each sequence as item, i (`${group}-${i}`)}
          <span>{item}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>
