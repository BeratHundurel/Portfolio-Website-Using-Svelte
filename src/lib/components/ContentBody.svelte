<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	import { components } from '$lib/slices';

	import Bounded from './Bounded.svelte';
	import Heading from './Heading.svelte';

	export let page: Content.ProjectDocument;
</script>

<Bounded tag="article">
	<div class="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
		<Heading tag="h1">{page.data.title}</Heading>
		<div class="flex gap-4 text-yellow-400">
			{#each page.tags as tag}
				<span class="text-xl font-bold">
					{tag}
				</span>
			{/each}
		</div>

		<div class="prose prose-lg prose-invert mt-10 w-full max-w-none md:mt-16">
			<SliceZone slices={page.data.slices} {components} />
		</div>
	</div>
</Bounded>
