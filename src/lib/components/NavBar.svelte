<script lang="ts">
  import { onMount } from "svelte";

  let themeControllers: NodeListOf<HTMLInputElement>;
  let currentIndex = -1;

  const themes = ["business","default", "retro", "cyberpunk", "valentine", "aqua", "corporate","synthwave","lofi","black","wireframe","coffee","dim","luxury"];
  const defaultTheme = "business";   

  onMount(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme);

    themeControllers = document.querySelectorAll('.theme-controller');

    themeControllers.forEach(controller => {
      if (controller.value === defaultTheme) {
        controller.checked = true;
      }

      controller.addEventListener('change', (event) => {
        const theme = (event.target as HTMLInputElement).value;
        document.documentElement.setAttribute('data-theme', theme);
      });
    });

    document.addEventListener('keydown', handleKeydown);
  });

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      currentIndex = (currentIndex + 1) % themeControllers.length;
      (themeControllers[currentIndex] as HTMLElement).focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      currentIndex = (currentIndex - 1 + themeControllers.length) % themeControllers.length;
      (themeControllers[currentIndex] as HTMLElement).focus();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (currentIndex >= 0) {
        themeControllers[currentIndex].click();
      }
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="navbar sticky top-0 z-50 bg-neutral text-neutral-content p-4 flex flex-wrap items-center justify-between">
  <div class="flex-1">
    <h1 class="text-xl font-bold text-neutral-content">Taimur Hasan</h1>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <button tabindex="0" class="btn btn-neutral text-neutral-content flex items-center">
        <span>Theme</span>
      </button>
      <ul tabindex="0" class="dropdown-content mt-3 p-2 z-[1] shadow bg-neutral rounded-box w-30 text-neutral-content">
        <div class="join join-vertical">
          {#each themes as theme}
            <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label={theme} value={theme} />
          {/each}
        </div>
      </ul>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-neutral text-neutral-content" on:click={scrollToTop}>
      <span class="text-center text-bold text-3xl">/</span>
    </button>
  </div>
</div>

<style>
  @media (max-width: 640px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .navbar > .flex-none {
      margin-top: 0.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .dropdown-content {
      width: 100%;
    }
  }
</style>
