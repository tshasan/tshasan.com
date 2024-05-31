<script lang="ts">
  import ThemeController from './ThemeController.svelte';
  import { ArrowUpToLine } from 'lucide-svelte';
  import { name } from '$lib/config';

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
</script>

<div
  class="navbar sticky top-0 z-50 bg-neutral text-neutral-content p-4 flex flex-wrap items-center justify-between"
>
  <div class="flex-1">
    <h1 class="text-xl font-bold text-neutral-content">{name}</h1>
  </div>
  <div class="flex-none flex items-center space-x-2">
    <ThemeController />
    <button
      class="btn btn-square btn-ghost text-neutral-content"
      on:click={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUpToLine class="text-center text-bold" aria-hidden="true" />
    </button>
  </div>
</div>
