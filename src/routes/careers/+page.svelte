<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section>
	<h2>Careers</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12">
		{#each data.careers as { title, location, department, slug }}
			<div class="box">
				<div class="flex-shrink-0">
					<img src="{base}/assets/logo_openmined.png" alt="OpenMined" />
				</div>
				<div class="flex-grow flex flex-col gap-3">
					<h3 class="text-xl font-normal">
						{title}
					</h3>
					<div>
						<p>Location: {location}</p>
						<p>Department: {department}</p>
					</div>
					<Button purpleBackground href="/careers/{slug}">More Info</Button>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		@apply w-screen flex flex-col gap-4 flex-grow px-6 py-2 max-w-[1152px] mx-auto mb-16 md:mb-[144px];
	}

	.box {
		@apply flex flex-col md:flex-row gap-3 hover:shadow-md shadow-slate-100 hover:bg-slate-50 mb-2 p-4;
	}

	.box img {
		@apply max-w-[50px] mt-2;
	}
</style>
