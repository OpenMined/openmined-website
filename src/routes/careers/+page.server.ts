import type { CareerPost } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const careers = [];

  const paths = import.meta.glob('./**/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (file && typeof file === 'object' && 'metadata' in file) {
      const metadata = file.metadata as CareerPost;
      const career = { ...metadata } satisfies CareerPost;
      careers.push(career);
    }
  }

  return { careers };
};
