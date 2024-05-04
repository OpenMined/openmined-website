<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components';
	import Arrow from '$lib/components/Arrow.svelte';
	import {
		community,
		getInvolved,
		mainPartnerships,
		partnerships,
		collaborations
	} from './sections.json';
</script>

<section id="intro" class="prose">
	<img
		src="{base}/assets/logo_openmined.png"
		alt="OpenMined"
		class="h-[90px] w-[90px] items-center mb-4"
	/>
	<h2>We facilitate access to non-public data, AIs, and APIs.</h2>

	<p>
		Access to non-public data, AIs, and APIs is hard because of concerns like privacy, security, and
		IP. If you need more access, or you need to offer more access to others, we build free,
		open-source, privacy enhancing software that can help.
	</p>

	<p>
		16,000+ members strong and 6+ years old, OpenMined is a non-profit on a mission to help
		researchers access the most important information in the world, and use it to answer the most
		important questions in the world. We do this by building a new kind of web server, PySyft, which
		can empower one person to use data owned by another to answer a question — without obtaining a
		copy of the data. We think it's going to lead to 1000x more data in every scientific field. Come
		join us.
	</p>

	<Button href="/careers" large>We're Hiring</Button>
</section>

<section id="community">
	<h2 class="mb-2">Learn about the Community</h2>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
		{#each community as { icon, heading, description, href, buttonText }}
			<div id="community-box">
				<img src={icon} alt="" class="h-10 mr-auto" />
				<p aria-hidden="true">{heading}</p>
				<p class="flex-grow">
					{description}
				</p>
				<Button {href} fullWidth purpleBackground>{buttonText}</Button>
			</div>
		{/each}
	</div>
</section>

<section id="get-involved">
	<div>
		<h2 class="mb-2">Get Involved</h2>

		<div>
			{#each getInvolved as { title, href }}
				<Button fullWidth {href}>
					<span class="inline-flex justify-between w-full items-center py-2 text-xl">
						{title}
						<Arrow />
					</span>
				</Button>
			{/each}
		</div>
	</div>

	<div>
		<img src="{base}/assets/slide_1.jpg" alt="" />
	</div>
</section>

<section id="partnerships">
	<h2 class="font-normal mb-2">Partnerships</h2>

	<div class="flex flex-col gap-6">
		<div class="main-partnerships flex flex-wrap justify-around items-center">
			{#each mainPartnerships as { link, logo, alt }}
				<a target="_blank" rel="noopener" href={link}>
					<img src="{base}/{logo}" {alt} class="max-h-40 h-auto" />
				</a>
			{/each}
		</div>

		<div class="partnerships flex flex-wrap justify-around items-center">
			{#each partnerships as { link, logo, alt }}
				<a target="_blank" rel="noopener" href={link}>
					<img src="{base}/{logo}" {alt} />
				</a>
			{/each}
		</div>
	</div>
</section>

<section id="news">
	<p class="text-center py-[72px]">
		Thank you to our mission partners for coming together on the following collaborations
	</p>
	<h2 class="sr-only">News</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
		{#each collaborations as { img, imgLink, alt, heading, description, readMoreLink }}
			<div class="flex flex-col h-full gap-4">
				<a target="_blank" rel="noopener" href={imgLink}>
					<img src="{base}/{img}" {alt} />
				</a>
				<h3>{heading}</h3>
				<p class="flex-grow">{description}</p>
				<Button fullWidth purpleBackground href={readMoreLink}>Read more</Button>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex flex-col gap-4 py-2 mx-auto max-w-[1152px] mb-16 md:mb-[144px];
	}

	#intro {
		@apply items-center mb-16 md:mb-[180px] max-w-[688px] gap-0;
	}

	#intro h2 {
		@apply text-om-gray font-roboto font-medium mb-4 leading-9 text-center;
	}

	#community {
		@apply gap-12;
	}

	#community-box {
		@apply border-t border-black min-h-[200px] flex flex-col flex-grow pt-4 gap-3;
	}

	:global(#community-box > :last-child) {
		@apply mt-4;
	}

	#get-involved {
		@apply grid grid-cols-1 md:grid-cols-2 gap-8 w-full;
	}

	#get-involved div:first-of-type {
		@apply flex flex-col gap-4;
	}

	#get-involved h2 {
		@apply border-b border-black p-3 font-normal mb-4;
	}

	#get-involved img {
		@apply rounded-md object-cover object-right h-full;
	}

	#partnerships {
		@apply px-6 w-full mb-0 md:mb-0;
	}

	#partnerships > div {
		@apply flex flex-col gap-6 border-b border-t border-black;
	}

	#partnerships img {
		@apply max-h-40 h-auto hover:opacity-80 hover:bg-slate-50;
	}

	#partnerships .partnerships img {
		@apply max-h-20;
	}

	#news {
		@apply mb-2 font-normal;
	}

	#news h3 {
		@apply text-om-gray font-roboto font-medium mb-2;
	}

	#news img {
		@apply mb-4 mx-auto object-contain rounded shadow-slate-200 shadow-md;
	}
</style>
