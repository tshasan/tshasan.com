import type { PageLoad } from './$types';

type PostMetadata = {
  title: string;
  date: string;
};

type PostModule = {
  metadata: PostMetadata;
  default: any; 
};

export const load: PageLoad = async () => {
  const modules: Record<string, () => Promise<PostModule>> = import.meta.glob('../../lib/posts/*.svx');
  const posts: { slug: string; title: string; date: string }[] = [];

  for (const path in modules) {
    const slug = path.split('/').pop()?.replace('.svx', '');
    if (slug) {
      const post = await modules[path]();
      if (post && post.metadata) {
        const { title, date } = post.metadata;
        posts.push({ slug, title, date });
      }
    }
  }

  return {
    posts
  };
};
