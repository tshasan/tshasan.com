<script>
  export let data;
</script>

<svelte:component this={data.content} {...data.metadata} />
