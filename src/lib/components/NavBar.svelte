<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';
  import { onMount } from "svelte";

  let themeControllers: NodeListOf<HTMLInputElement>;

  onMount(() => {
    themeControllers = document.querySelectorAll('.theme-controller');

    themeControllers.forEach(controller => {
      controller.addEventListener('change', (event) => {
        const theme = (event.target as HTMLInputElement).value;
        document.documentElement.setAttribute('data-theme', theme);
      });
    });
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="navbar sticky top-0 z-50 bg-neutral text-neutral-content p-4">
  <div class="flex-1">
    <h1 class="text-xl font-bold text-neutral-content">Taimur Hasan</h1>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <button tabindex="0" class="btn btn-neutral text-neutral-content">
        Theme
        <ChevronDown />
      </button>
      <ul tabindex="0" class="dropdown-content mt-3 p-2 z-[1] shadow bg-neutral rounded-box w-40 text-neutral-content">
        {#each ["dark", "light", "black", "valentine", "corporate", "cyberpunk", "coffee"] as theme}
          <li>
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="theme-dropdown" class="theme-controller" aria-label={theme} value={theme} />
              <span class="capitalize">{theme}</span>
            </label>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-neutral text-neutral-content" on:click={scrollToTop}>
      <span class="text-center text-bold text-3xl">/</span>
    </button>
  </div>
</div>
