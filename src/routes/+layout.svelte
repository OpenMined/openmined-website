<script>
	import { base } from '$app/paths';
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
</script>

<div class="flex flex-col min-h-screen h-full">
	<Header />
	<main>
		<div
			style="--blue-bg-url: url({base}/assets/bg_ball_blue.png); --orange-bg-url: url({base}/assets/bg_ball_orange.png);"
		>
			<slot />
		</div>
	</main>
	<Footer />
</div>

<style lang="postcss">
	main {
		@apply flex-grow flex flex-col justify-center items-center h-full px-4 w-full pb-12 md:pb-20;

		background-image: var(--blue-bg-url), var(--orange-bg-url);
		background-position:
			left 200px,
			right 400px;
		background-repeat: no-repeat;
	}

	main > div:first-of-type {
		@apply max-w-[1220px] w-full flex flex-col justify-center items-center flex-grow;
	}

	:global(a) {
		@apply text-blue-500 no-underline;
	}
</style>
