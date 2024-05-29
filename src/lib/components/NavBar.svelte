<script lang="ts">
  import ThemeController from './ThemeController.svelte';

  const themes = ["business", "default", "retro", "cyberpunk", "valentine", "aqua", "corporate", "synthwave", "lofi", "black", "wireframe", "coffee", "dim", "luxury"];
  const defaultTheme = "business";

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="navbar sticky top-0 z-50 bg-neutral text-neutral-content p-4 flex flex-wrap items-center justify-between">
  <div class="flex-1">
    <h1 class="text-xl font-bold text-neutral-content">Taimur Hasan</h1>
  </div>
  <div class="flex-none">
    <ThemeController {themes} {defaultTheme} />
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-neutral text-neutral-content" on:click={scrollToTop}>
      <span class="text-center text-bold text-3xl">/</span>
    </button>
  </div>
</div>
