<script lang="ts">
  let {
    fill = "var(--bg-muted)",
    flip = false,
  }: {
    fill?: string;
    flip?: boolean;
  } = $props();
</script>

<div class="wave-divider" aria-hidden="true">
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    style:transform={flip ? "scaleY(-1)" : undefined}
  >
    <path
      d="M0,64 C200,120 400,8 600,64 C800,120 1000,8 1200,64 L1200,120 L0,120 Z"
      style:fill={fill}
    />
  </svg>
</div>
