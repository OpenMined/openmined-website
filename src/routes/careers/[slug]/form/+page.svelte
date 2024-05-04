<script lang="ts">
	import Form from './hubspot.svelte';
	export let data;
</script>

<Form hubspotFormId={data.metadata.hubspotFormId} formName={data.metadata.title} />
