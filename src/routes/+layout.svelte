<script>
  import '../app.css';
  import Seo from 'svelte-seo';

  let meta = {
    title: "Taimur's Personal Website",
    description: 'Check out my personal site',
    url: 'https://tshasan.com',
    type: 'website',
    github: {
      profile: 'https://github.com/tshasan',
    },
    linkedin: {
      profile: 'https://www.linkedin.com/in/taimurhasan1',
    },
  };
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <meta property="og:type" content={meta.type} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:url" content={meta.url} />
  <meta name="github:profile" content={meta.github.profile} />
  <meta name="linkedin:profile" content={meta.linkedin.profile} />
</svelte:head>

<Seo
  title={meta.title}
  description={meta.description}
  openGraph={{
    type: meta.type,
    url: meta.url,
    title: meta.title,
    description: meta.description,
  }}
  additionalMetaTags={[
    { name: 'github:profile', content: meta.github.profile },
    { name: 'linkedin:profile', content: meta.linkedin.profile },
  ]}
/>

<slot />
