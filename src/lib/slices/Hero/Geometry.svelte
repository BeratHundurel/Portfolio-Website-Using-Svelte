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

	const materialParams = [
		{ color: 0xff5733, roughness: 0.1, metalness: 0.8, emissive: 0xff4500, emissiveIntensity: 0.5 }, // Bright Red
		{ color: 0xffc300, roughness: 0.4, metalness: 0.2, emissive: 0xffff00, emissiveIntensity: 0.3 }, // Bright Yellow
		{ color: 0x33ff57, roughness: 0.1, metalness: 0.7, emissive: 0x00ff00, emissiveIntensity: 0.5 }, // Bright Green
		{ color: 0x3357ff, roughness: 0.1, metalness: 0.5, emissive: 0x0000ff, emissiveIntensity: 0.4 }, // Bright Blue
		{ color: 0x8e44ad, roughness: 0.2, metalness: 0.4, emissive: 0x9400d3, emissiveIntensity: 0.3 }, // Purple
		{ color: 0x1abc9c, roughness: 0.1, metalness: 0.3, emissive: 0x00ced1, emissiveIntensity: 0.3 }, // Teal
		{ color: 0x2980b9, roughness: 0.3, metalness: 0.6, emissive: 0x4682b4, emissiveIntensity: 0.4 }, // Steel Blue
		{ color: 0xd35400, roughness: 0.2, metalness: 0.3, emissive: 0xff4500, emissiveIntensity: 0.4 }, // Orange Red
		{ color: 0xc0392b, roughness: 0.3, metalness: 0.6, emissive: 0x800000, emissiveIntensity: 0.4 }, // Dark Red
		{ color: 0x16a085, roughness: 0.2, metalness: 0.4, emissive: 0x2e8b57, emissiveIntensity: 0.3 }, // Sea Green
		{ color: 0xf39c12, roughness: 0.1, metalness: 0.4, emissive: 0xff8c00, emissiveIntensity: 0.4 }, // Dark Orange
		{ color: 0x9b59b6, roughness: 0.3, metalness: 0.5, emissive: 0x9400d3, emissiveIntensity: 0.4 }, // Amethyst
		{ color: 0x2ecc71, roughness: 0.1, metalness: 0.9, emissive: 0x00ff7f, emissiveIntensity: 0.4 }, // Spring Green
		{ color: 0x34495e, roughness: 0.3, metalness: 0.5, emissive: 0x2f4f4f, emissiveIntensity: 0.3 }, // Dark Slate Gray
		{ color: 0xe74c3c, roughness: 0.1, metalness: 0.8, emissive: 0xff0000, emissiveIntensity: 0.5 }, // Red
		{ color: 0x27ae60, roughness: 0.1, metalness: 0.5, emissive: 0x006400, emissiveIntensity: 0.4 }, // Dark Green
		{ color: 0x2c3e50, roughness: 0.1, metalness: 0.9, emissive: 0x111111, emissiveIntensity: 0.2 }, // Midnight Blue
		{ color: 0xe67e22, roughness: 0.4, metalness: 0.3, emissive: 0xffa500, emissiveIntensity: 0.4 },
		{ color: 0x1b2631, roughness: 0.2, metalness: 0.5, emissive: 0x0, emissiveIntensity: 0.2 }, // Dark Navy
		{ color: 0x17202a, roughness: 0.3, metalness: 0.4, emissive: 0x0, emissiveIntensity: 0.2 }, // Very Dark Gray
		{ color: 0x2d3436, roughness: 0.1, metalness: 0.6, emissive: 0x0, emissiveIntensity: 0.3 } // Charcoal  // Orange
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
