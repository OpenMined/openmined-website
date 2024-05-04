<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="prose prose-lg">
	<hgroup>
		<h2>{data.metadata.title}</h2>
		<div class="flex flex-col">
			<span><b>Location</b>: {data.metadata.location}</span>
			<span><b>Department</b>: {data.metadata.department}</span>
		</div>
	</hgroup>
	<svelte:component this={data.content} />
</article>
