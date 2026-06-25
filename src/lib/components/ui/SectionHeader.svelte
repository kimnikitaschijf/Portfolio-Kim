<script lang="ts">
  let {
    id = undefined,
    title,
    subtitle = undefined,
  }: {
    id?: string;
    title: string;
    subtitle?: string;
  } = $props();
</script>

<header class="section-head">
  <h2 {id} class="section-head__title">{title}</h2>
  {#if subtitle}
    <p class="section-head__sub">{subtitle}</p>
  {/if}
</header>
