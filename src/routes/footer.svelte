<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer id="footer" class="flex justify-between items-center p-3 border-t">
	<img src="{base}/assets/logo_openmined.png" alt="OpenMined" class="h-6 my-auto" />
	<a target="_blank" rel="noopener" href="https://slack.openmined.org/" class="text-right ml-auto">
		Join us on Slack
	</a>
</footer>

<style lang="postcss">
	footer {
		@apply bg-om-gray text-white h-12;
	}

	a {
		@apply text-white hover:underline;
	}
</style>
