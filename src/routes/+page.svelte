<script lang="ts">
  import { onMount } from 'svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import ShowCase from '$lib/components/ShowCase.svelte';

  let Footer;

  onMount(async () => {
    const { default: LoadedFooter } = await import(
      '$lib/components/Footer.svelte'
    );
    Footer = LoadedFooter;
  });
</script>

<NavBar />
<main>
  <Hero />
  <About />
  <ShowCase />
</main>
{#if Footer}
  <svelte:component this={Footer} />
{/if}
