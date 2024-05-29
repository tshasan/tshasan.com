<script lang="ts">
    import { onMount } from "svelte";
  
    export let themes: string[] = [];
    export let defaultTheme: string = "business";
  
    let themeControllers: NodeListOf<HTMLInputElement>;
    let currentIndex = -1;
  
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
  </script>
  
  <div class="dropdown dropdown-end">
    <button tabindex="0" class="btn btn-neutral text-neutral-content flex items-center">
      <span>Theme</span>
    </button>
    <ul class="dropdown-content mt-3 p-2 z-[1] shadow bg-neutral rounded-box min-w-fit text-neutral-content">
      {#each themes as theme}
        <li>
          <input type="radio" name="theme-buttons" class="btn theme-controller join-item" aria-label={theme} value={theme} />
        </li>
      {/each}
    </ul>
  </div>
   