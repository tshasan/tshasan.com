<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/theme';
  import { ChevronDown } from 'lucide-svelte';

  let selectedTheme: string = '';

  onMount(() => {
    theme.subscribe((value: string) => {
      selectedTheme = value;
    });
  });

  const updateTheme = (event: Event) => {
    const target = event.target as HTMLInputElement;
    theme.set(target.value);
  };
</script>

<div class="dropdown relative">
  <div tabindex="0" role="button" class="btn btn-ghost m-1 flex items-center">
    Theme
    <ChevronDown class="ml-2" />
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul
    tabindex="0"
    class="dropdown-content z-[1000] p-2 shadow-xl bg-base-300 rounded-box w-30"
  >
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Business"
          value="business"
          checked={selectedTheme === 'business'}
          on:change={updateTheme}
        />
      </label>
    </li>
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Coffee"
          value="coffee"
          checked={selectedTheme === 'coffee'}
          on:change={updateTheme}
        />
      </label>
    </li>
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Cyberpunk"
          value="cyberpunk"
          checked={selectedTheme === 'cyberpunk'}
          on:change={updateTheme}
        />
      </label>
    </li>
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Valentine"
          value="valentine"
          checked={selectedTheme === 'valentine'}
          on:change={updateTheme}
        />
      </label>
    </li>
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Lofi"
          value="lofi"
          checked={selectedTheme === 'lofi'}
          on:change={updateTheme}
        />
      </label>
    </li>
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Black"
          value="black"
          checked={selectedTheme === 'black'}
          on:change={updateTheme}
        />
      </label>
    </li>
    <li>
      <label>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Corporate"
          value="corporate"
          checked={selectedTheme === 'corporate'}
          on:change={updateTheme}
        />
      </label>
    </li>
  </ul>
</div>
