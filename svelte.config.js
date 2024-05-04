import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.svx', '.md']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.argv.includes('dev') ? '' : '/openmined-website'
    }
  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
