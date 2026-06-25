<script lang="ts">
  let message = $state("");
  let visible = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  export function show(msg: string) {
    message = msg;
    visible = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      visible = false;
    }, 3500);
  }
</script>

{#if visible}
  <div class="egg-toast" role="status" aria-live="polite">
    {message}
  </div>
{/if}
