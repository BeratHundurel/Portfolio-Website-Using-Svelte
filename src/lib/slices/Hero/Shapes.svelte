<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import * as THREE from 'three';
	import Geometry from './Geometry.svelte';
	import { ContactShadows, Environment, interactivity, transitions } from '@threlte/extras';
	import AnimateRobot from '$lib/components/AnimateRobot.svelte';

	interactivity();
	transitions();
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
<ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={9} />

<AnimateRobot position={[0, 0, -3]} />
