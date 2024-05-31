<script lang="ts">
  import { StarIcon, GitForkIcon, ExternalLink } from 'lucide-svelte';
  import type { Repo } from '$lib/fetchRepos';

  export let repos: Repo[] = [];
  export let loading: boolean = true;
</script>

<section class="bg-base-200 py-10" id="code">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6 text-base-content">Code Repositories</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#if loading}
        {#each Array(4) as _}
          <div
            class="card bg-secondary text-secondary-content shadow-xl animate-pulse"
          >
            <div class="card-body">
              <h3 class="card-title h-8 w-3/4 mb-2 text-base-content">
                loading
              </h3>
              <p class="h-16 mb-4 bg-secondary-content/20"></p>
            </div>
          </div>
        {/each}
      {:else}
        {#each repos as { link, owner, repo, description, languageColor, language, stars, forks }}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            class="card bg-secondary text-secondary-content shadow-xl p-6 transition-transform transform hover:scale-105"
          >
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img
                  src={`https://github.com/${owner}.png`}
                  alt="{owner}'s profile picture"
                  class="w-8 h-8 rounded-full mr-2"
                />
                <p class="font-bold">{owner}</p>
              </div>
              <ExternalLink size="20px" class="text-secondary-content" />
            </div>
            <div class="mb-4">
              <h3 class="text-xl font-bold">{repo}</h3>
              {#if description}
                <p>{description}</p>
              {/if}
            </div>
            <div class="flex justify-between items-center text-sm">
              {#if language}
                <div class="flex items-center">
                  <span
                    class="dot w-3 h-3 rounded-full"
                    style="background-color: {languageColor}"
                  ></span>
                  <span class="ml-2">{language}</span>
                </div>
              {/if}
              {#if stars}
                <div class="flex items-center">
                  <StarIcon size="16px" class="mr-1 text-secondary-content" />
                  <span>{stars}</span>
                </div>
              {/if}
              {#if forks}
                <div class="flex items-center">
                  <GitForkIcon
                    size="16px"
                    class="mr-1 text-secondary-content"
                  />
                  <span>{forks}</span>
                </div>
              {/if}
            </div>
          </a>
        {/each}
      {/if}
    </div>
  </div>
</section>

<style>
  .dot {
    display: inline-block;
  }
</style>
