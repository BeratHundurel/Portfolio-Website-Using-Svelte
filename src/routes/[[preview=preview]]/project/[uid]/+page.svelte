<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Heading from '$lib/components/Heading.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	export let data;
</script>

<Bounded tag="article">
	<div class="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
		<Heading tag="h1">{data.page.data.title}</Heading>
		<div class="flex gap-4 text-yellow-400">
			{#each data.page.tags as tag}
				<span class="text-xl font-bold">
					{tag}
				</span>
			{/each}
		</div>
		<div class="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
			<SliceZone slices={data.page.data.slices} {components} />
		</div>
	</div>
</Bounded>
