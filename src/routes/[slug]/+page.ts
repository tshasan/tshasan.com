import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob('../../lib/posts/*.svx');
  const match = `../../lib/posts/${params.slug}.svx`;

  if (match in modules) {
    const post = await modules[match]();
    const { title, date } = post.metadata;
    const content = post.default;

    return {
      content,
      metadata: { title, date }
    };
  } else {
    console.error(`Post not found: ${params.slug}`);
    return {
      status: 404,
      error: new Error('Post not found')
    };
  }
};
