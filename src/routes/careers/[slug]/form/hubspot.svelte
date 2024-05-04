<script lang="ts">
	import { onMount } from 'svelte';
	import { Loading } from '$lib/components';
	import { plausibleTrackFormEvent } from '$lib/plausible';

	export let hubspotFormId: string | number;
	export let formName: string;

	let loading = true;

	const targetId = `form-${hubspotFormId}`;

	const onBeforeFormSubmit = async () => {
		await plausibleTrackFormEvent({
			formId: String(hubspotFormId),
			formName: formName,
			referrer: document.referrer,
			url: window.location.href
		});
	};

	const onFormReady = () => {
		loading = false;
	};

	const handleCreateForm = () => {
		//@ts-ignore
		if (window.hbspt) {
			//@ts-ignore
			hbspt.forms.create({
				region: 'na1',
				portalId: '6487402',
				formId: hubspotFormId,
				target: `#${targetId}`,
				onBeforeFormSubmit,
				onFormReady
			});
		}
	};

	onMount(() => {
		if (window.hbspt && loading === true) {
			handleCreateForm();
		}
	});
</script>

<svelte:head>
	<script src="https://js.hsforms.net/forms/embed/v2.js" on:load={handleCreateForm}></script>
</svelte:head>

{#if loading}
	<Loading />
{/if}

<div id={targetId} class="w-full" />
