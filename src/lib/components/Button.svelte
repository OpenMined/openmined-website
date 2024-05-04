<script lang="ts">
	import { base } from '$app/paths';
	export let href: string;
	export let fullWidth: boolean = false;
	export let purpleBackground: boolean = false;
	export let large: boolean = false;

	let _base = base;

	if (href.startsWith('http')) {
		_base = '';
	}
</script>

<a
	rel="noopener"
	href="{_base}{href}"
	class="inline-flex justify-center items-center bg-om-gray text-white transition-all duration-300 ease-in-out py-2 px-4 rounded no-underline outline outline-gray-300 outline-1 capitalize"
	class:w-full={fullWidth}
	class:w-max={!fullWidth}
	class:white-background={!purpleBackground}
	class:purple-background={purpleBackground}
	class:xl={large}
>
	<slot />
</a>

<style lang="postcss">
	.purple-background {
		@apply hover:bg-om-purple hover:text-white;
	}

	.white-background {
		@apply hover:bg-gray-50 hover:text-om-gray;
	}

	.xl {
		@apply text-xl p-4;
	}
</style>
