<script context="module">
  export const metadata = {
    title: '',
    date: '',
  };
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { MoveLeft } from 'lucide-svelte';
</script>

<script>
  export let title;
  export let date;
</script>

<div class="min-h-screen flex flex-col">
  <NavBar />
  <main>
    <div class="flex-grow container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div class="card w-full bg-neutral shadow-xl">
        <div class="card-body p-6 sm:p-8 lg:p-10">
          <header class="flex justify-between items-center mb-4">
            <div>
              <h1
                class="card-title text-2xl sm:text-3xl lg:text-4xl text-neutral-content font-bold"
              >
                {title}
              </h1>
              <p class="text-neutral-content">Published: {date}</p>
            </div>
            <a href="/blog" class="btn btn-info">
              <MoveLeft class="rounded-btn" />
            </a>
          </header>
          <div class="prose lg:prose-xl text-neutral-content">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>
