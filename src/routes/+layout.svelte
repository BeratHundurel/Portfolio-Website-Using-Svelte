<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import avatar from '$lib/assets/avatar.jpg';

	let { children } = $props();
	const siteUrl = 'https://berathundurel.com';
	const canonicalUrl = $derived(new URL(page.url.pathname, siteUrl).href);
	const personSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Berat Hündürel',
		url: siteUrl,
		jobTitle: 'Full-Stack Engineer',
		email: 'berat.hundurel@hotmail.com',
		image: new URL(avatar, siteUrl).href,
		sameAs: [
			'https://github.com/BeratHundurel',
			'https://www.linkedin.com/in/berat-hündürel-1197b9253',
			'https://x.com/BHundurel'
		],
		knowsAbout: [
			'C#',
			'Go',
			'TypeScript',
			'JavaScript',
			'.NET',
			'Svelte',
			'React',
			'Next.js',
			'Docker',
			'PostgreSQL',
			'Microsoft SQL Server',
			'gRPC',
			'RabbitMQ'
		],
		worksFor: {
			'@type': 'Organization',
			name: 'Printomi'
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Istanbul',
			addressCountry: 'TR'
		}
	});
	const personSchemaJson = $derived(JSON.stringify(personSchema).replaceAll('<', '\\u003c'));
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href={avatar} />
	<link rel="apple-touch-icon" href={avatar} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
	<title>Berat Hündürel - Full-Stack Engineer</title>

	<meta name="theme-color" content="#0a0f1a" />
	<meta name="title" content="Berat Hündürel - Full-Stack Engineer" />
	<meta
		name="description"
		content="Backend-focused full-stack engineer building production APIs, web apps, and open-source GPUI Kit contributions with C#, Go, TypeScript, Svelte, and Rust."
	/>
	<meta name="author" content="Berat Hündürel" />
	<meta
		name="keywords"
		content="Berat Hündürel, Full Stack Engineer, Backend Engineer, C#, Go, Rust, TypeScript, .NET, Svelte, React, Docker, PostgreSQL, Istanbul, Software Engineer"
	/>

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Berat Hündürel" />
	<meta property="og:title" content="Berat Hündürel - Full-Stack Engineer" />
	<meta
		property="og:description"
		content="Backend-focused full-stack engineer building production APIs, web apps, and open-source GPUI Kit contributions."
	/>
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content="https://berathundurel.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Berat Hündürel - Full-Stack Engineer portfolio preview" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@BHundurel" />
	<meta name="twitter:creator" content="@BHundurel" />
	<meta name="twitter:title" content="Berat Hündürel - Full-Stack Engineer" />
	<meta
		name="twitter:description"
		content="Backend-focused full-stack engineer building production APIs, web apps, and open-source GPUI Kit contributions."
	/>
	<meta name="twitter:image" content="https://berathundurel.com/og-image.png" />
	<meta name="twitter:image:alt" content="Berat Hündürel - Full-Stack Engineer portfolio preview" />
	<svelte:element this={"script"} type="application/ld+json">{personSchemaJson}</svelte:element>
</svelte:head>

{@render children()}
