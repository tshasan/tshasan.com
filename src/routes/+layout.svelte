<script>
  import "../app.css";
  import Seo from 'svelte-seo';

  let meta = {
    title: "Taimur's Personal Website",
    description: "Check out my personal site",
    url: "https://tshasan.com",
  }; 
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:url" content={meta.url} />
</svelte:head>

<Seo 
  title={meta.title}
  description={meta.description}
  openGraph={{
    type: 'website',
    url: meta.url,
    title: meta.title,
    description: meta.description,
  }}
/>

<slot />