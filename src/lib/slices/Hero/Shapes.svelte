<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import { ContactShadows, Environment } from '@threlte/extras';
	import AnimateRobot from '$lib/components/AnimateRobot.svelte';
</script>

<Threlte.PerspectiveCamera
	makeDefault
	position={[0, 3, 25]}
	aspect={1}
	far={40}
	fov={40}
	near={1}
/>

<Environment files="smallroom.hdr" path="/" format="hdr" />

<ContactShadows position={[0, -2.25, 0]} opacity={1} scale={50} blur={1} far={15} />

<AnimateRobot position={[0, 0, -3]} />
