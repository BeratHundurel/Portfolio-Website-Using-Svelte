<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.ImageBlockSlice;
</script>

<PrismicImage
	field={slice.primary.image}
	class="not-prose w-full h-full rounded-md mt-6 md:mt-10 lg:mt-12"
/>
