<script lang="ts">
  import PinnedRepos from '$lib/components/PinnedRepos.svelte';
  import { onMount } from 'svelte';
  import { fetchPinnedRepos, type Repo } from '$lib/fetchRepos';

  let repos: Repo[] = [];
  let loading = true;

  onMount(async () => {
    const username = 'tshasan'; 
    try {
      repos = await fetchPinnedRepos(username);
    } catch (error) {
      console.error('Error fetching pinned repositories:', error);
    } finally {
      loading = false;
    }
  });
</script>

<div class="bg-base-200 py-10">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl text-center font-bold text-base-content mb-8">Projects</h1>
    <PinnedRepos {repos} {loading} />
  </div>
</div>
