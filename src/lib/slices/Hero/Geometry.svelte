<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import { createTransition, Float } from '@threlte/extras';
	import * as THREE from 'three';
	import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;

	let visible = false;
	let reducedMotionRate = 0;

	const materialParams = [
		{ color: 0x2ecc71, roughness: 0 },
		{ color: 0xf1c40f, roughness: 0.4 },
		{ color: 0xe74c3c, roughness: 0.1 },
		{ color: 0x8e44ad, roughness: 0.1 },
		{ color: 0x1abc9c, roughness: 0.1 },
		{ color: 0x2980b9, roughness: 0, metalness: 0.5 },
		{ color: 0x2c3e50, roughness: 0.1, metalness: 0.5 },
		{ color: 0xd35400, roughness: 0.2 },
		{ color: 0x3498db, roughness: 0.3 },
		{ color: 0xc0392b, roughness: 0.1, metalness: 0.7 },
		{ color: 0x16a085, roughness: 0.2 },
		{ color: 0x27ae60, roughness: 0.1 },
		{ color: 0x2980b9, roughness: 0.3 },
		{ color: 0x8e44ad, roughness: 0.2 },
		{ color: 0x2c3e50, roughness: 0.1, metalness: 0.8 },
		{ color: 0xd35400, roughness: 0.4 },
		{ color: 0xf39c12, roughness: 0.1 },
		{ color: 0xc0392b, roughness: 0.3, metalness: 0.6 }
	];

	const soundEffects = [
		new Audio('/sounds/sound1.ogg'),
		new Audio('/sounds/sound2.ogg'),
		new Audio('/sounds/sound3.ogg'),
		new Audio('/sounds/sound4.ogg'),
		new Audio('/sounds/sound5.ogg'),
		new Audio('/sounds/sound6.ogg'),
		new Audio('/sounds/sound7.ogg'),
		new Audio('/sounds/sound8.ogg'),
		new Audio('/sounds/sound9.ogg'),
		new Audio('/sounds/sound10.ogg'),
		new Audio('/sounds/sound11.ogg'),
		new Audio('/sounds/sound12.ogg')
	];

	function getRandomMaterial() {
		const randomInt = gsap.utils.random(1, 18, 1);
        console.log(randomInt);
		if (randomInt === 1) {
			return new THREE.MeshNormalMaterial();
		}
		return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
	}

	function handleCLick(event: MouseEvent) {
		gsap.utils.random(soundEffects).play();
		if ('object' in event && event.object instanceof THREE.Mesh) {
			gsap.to(event.object.rotation, {
				x: `+=${gsap.utils.random(0, 3)}`,
				y: `+=${gsap.utils.random(0, 3)}`,
				z: `+=${gsap.utils.random(0, 3)}`,
				duration: 1.3,
				ease: 'elastic.out(1,0.3)',
				yoyo: true
			});

			event.object.material = getRandomMaterial();
		}
	}

	const bounce = createTransition((ref) => {
		return {
			tick(t) {
				if (t > 0) visible = true;
				ref.scale.set(t, t, t);
			},
			easing: elasticOut,
			duration: gsap.utils.random(800, 1200),
			delay: gsap.utils.random(0, 500)
		};
	});
</script>

<Threlte.Group position={position.map((p) => p * 2)}>
	<Float
		speed={5 * rate}
		rotationSpeed={5 * rate}
		rotationIntensity={6 * rate}
		floatIntensity={5 * rate}
	>
		<Threlte.Mesh
			{visible}
			in={bounce}
			{geometry}
			material={getRandomMaterial()}
			interactive
			on:click={handleCLick}
		></Threlte.Mesh>
	</Float>
</Threlte.Group>
