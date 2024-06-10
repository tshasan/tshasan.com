<script lang="ts">
  export let data;
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<NavBar />
<main class="flex flex-col min-h-screen">
  <div class="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <ul class="space-y-4">
      {#each data.posts as post}
        <li
          class="bg-secondary p-4 rounded-lg shadow hover:bg-accent transition duration-300"
        >
          <a
            href={`/${post.slug}`}
            class="text-lg font-semibold text-primary hover:underline"
          >
            {post.title}
          </a>
          <p class="text-sm text-secondary-content">{post.date}</p>
        </li>
      {/each}
    </ul>
  </div>
</main>
<Footer class="mt-auto" />
