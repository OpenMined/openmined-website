import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const content = await import(`../../[slug]/${params.slug}.md`);

    return {
      metadata: content.metadata
    };
  } catch (e) {
    return error(404, `Not found: ${params.slug}`);
  }
};
