<script>
  import { ChevronDown } from 'lucide-svelte';
</script>

<div class="dropdown relative">
  <div tabindex="0" role="button" class="btn btn-ghost m-1 flex items-center">
    Theme
    <ChevronDown class="ml-2" />
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul
    tabindex="0"
    class="dropdown-content z-[ p-2 shadow-2xl bg-base-300 rounded-box w-full w-30"
  >
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Default"
        value="buisness"
      />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Coffee"
        value="coffee"
      />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Cyberpunk"
        value="cyberpunk"
      />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Valentine"
        value="valentine"
      />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Aqua"
        value="aqua"
      />
    </li>
  </ul>
</div>
