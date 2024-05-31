<script lang="ts">
  import { page } from '$app/stores';
</script>

<div
  class="flex flex-col items-center justify-center min-h-screen bg-base-100 p-4"
>
  <div
    class="text-center bg-neutral rounded-lg shadow-lg p-10 mb-8 w-full max-w-md"
  >
    <h1 class="text-4xl font-bold text-error mb-4">{$page.status}</h1>
    <p class="text-lg text-error-content mb-4">{$page.error?.message}</p>
  </div>
  <a href="/" class="btn btn-primary btn-lg">Go to Homepage</a>
</div>
