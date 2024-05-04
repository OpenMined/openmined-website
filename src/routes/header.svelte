<script lang="ts">
	import { base } from '$app/paths';
	const icons = [
		{ href: 'https://slack.openmined.org/', service: 'slack' },
		{ href: 'https://github.com/OpenMined/pysyft', service: 'github' },
		{ href: 'https://www.linkedin.com/company/openmined/', service: 'linkedin' },
		{ href: 'https://x.com/openminedorg', service: 'x' }
	];
</script>

<header class="flex justify-between items-center p-6 pr-0 md:p-10 pb-0">
	<h1 class="sr-only">OpenMined</h1>
	<a href="{base}/">
		<img
			src="{base}/assets/logo_openmined_wide_bw.png"
			alt="Go to the main OpenMined page"
			class="h-8 sm:h-10"
		/>
	</a>
	<div class="flex items-center justify-end p-4 gap-4 flex-shrink-0">
		<span class="uppercase hidden sm:block">Connect:</span>
		{#each icons as icon}
			<a target="_blank" rel="noopener" href={icon.href}>
				<img
					src="{base}/assets/icon_{icon.service}.svg"
					alt="Link to OpenMined's ${icon.service} account"
					class="svg-icon h-6"
				/>
			</a>
		{/each}
	</div>
</header>
