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
<!-- Gem -->
<!-- <Geometry position={[0, 0, 0]} rate={0.3} geometry={new THREE.IcosahedronGeometry(3)} /> -->

<!-- Pill -->
<!-- <Geometry
	position={[3, 4, -2]}
	rate={0.4}
	geometry={new THREE.CapsuleGeometry(0.5, 1.6, 2, 16)}
/> -->

<!-- Soccer Ball -->
<!-- <Geometry position={[-3, 4, -5]} rate={0.6} geometry={new THREE.DodecahedronGeometry(1.5)} /> -->

<!-- Donut -->
<!-- <Geometry
	position={[-1.75, 0.5, 4]}
	rate={0.5}
	geometry={new THREE.TorusGeometry(0.6, 0.25, 16, 32)}
/> -->

<!-- Diamond -->
<!-- <Geometry position={[-3, 4, -5]} rate={0.7} geometry={new THREE.OctahedronGeometry(1.5)} /> -->
