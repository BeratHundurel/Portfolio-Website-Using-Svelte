<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'dark' | 'light';

	let theme: Theme = 'dark';

	const setTheme = (nextTheme: Theme) => {
		theme = nextTheme;

		if (typeof document !== 'undefined') {
			document.documentElement.dataset.theme = nextTheme;
			document.documentElement.style.colorScheme = nextTheme;
		}

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('portfolio-theme', nextTheme);
		}
	};

	onMount(() => {
		const currentTheme = document.documentElement.dataset.theme;
		setTheme(currentTheme === 'light' ? 'light' : 'dark');
	});

	const heroCopy =
		'I build APIs, internal tools, web interfaces, and desktop software with Go, .NET, Svelte, and Rust.';

	const quickStats = [
		{
			label: 'Current work',
			value: 'Printomi',
			detail: 'Printing infrastructure and operations tools'
		},
		{ label: 'Open source', value: '8 merged PRs', detail: 'gpui-component, Apr-Jul 2026' },
		{
			label: 'Main stack',
			value: 'Go / .NET / Svelte',
			detail: 'APIs, web apps, and internal tools'
		}
	];

	const freelanceProjects = [
		{
			name: 'Draftlane',
			category: 'SaaS product website',
			description:
				'A focused product site for a feedback and approval platform, built around one clear conversion path.',
			image: '/freelance-work/saas.png',
			singleColumnImage: undefined,
			width: 1265,
			height: 712,
			alt: 'Draftlane SaaS concept website homepage',
			url: 'https://saas.berathundurel.com/',
			featured: true
		},
		{
			name: 'Cairn Build Co.',
			category: 'Construction website',
			description: 'A direct, confident site for a residential construction company.',
			image: '/freelance-work/construction.png',
			singleColumnImage: '/freelance-work/construction-wide.png',
			width: 375,
			height: 811,
			alt: 'Cairn Build Co. construction concept website homepage',
			url: 'https://construction.berathundurel.com/en'
		},
		{
			name: 'Haven Dental Studio',
			category: 'Healthcare website',
			description: 'A calm, welcoming site for a modern dental practice.',
			image: '/freelance-work/dental.png',
			singleColumnImage: '/freelance-work/dental-wide.png',
			width: 375,
			height: 811,
			alt: 'Haven Dental Studio concept website homepage',
			url: 'https://dental.berathundurel.com/en'
		}
	];

	const technicalSkills = [
		{
			label: 'Languages',
			items: ['C#', 'Go', 'TypeScript', 'JavaScript', 'Rust', 'Zig']
		},
		{
			label: 'Backend',
			items: ['.NET', 'Gin', 'Chi', 'Fiber', 'RabbitMQ', 'gRPC']
		},
		{
			label: 'Frontend',
			items: ['Svelte', 'React', 'Next.js', 'TailwindCSS']
		},
		{
			label: 'Data',
			items: ['PostgreSQL', 'Microsoft SQL Server', 'Entity Framework Core']
		},
		{
			label: 'Infrastructure',
			items: ['Docker', 'IIS', 'GitHub Actions', 'Testcontainers', 'CUPS', 'IPP']
		}
	];

	const gpuiHighlights = [
		{
			title: 'TextView selection',
			detail:
				'Added double-click word selection, triple-click block selection, select-all behavior, shared word-boundary helpers, and focused tests.',
			pr: 'PR #2408',
			url: 'https://github.com/longbridge/gpui-component/pull/2408'
		},
		{
			title: 'Markdown highlighting & performance',
			detail:
				'Added language-aware highlighting for fenced code blocks and reused lazy syntax queries to keep Markdown rendering fast.',
			pr: '2 PRs',
			url: 'https://github.com/longbridge/gpui-component/pull/2557'
		},
		{
			title: 'Segmented tabs stability',
			detail:
				'Fixed indicator flicker in dynamic segmented tabs and added story coverage for add, remove, and switch behavior.',
			pr: 'PR #2397',
			url: 'https://github.com/longbridge/gpui-component/pull/2397'
		},
		{
			title: 'Sidebar, menu, and rendering fixes',
			detail:
				'Improved sidebar toggling, popup menu sizing, highlighter empty-range handling, and GPUI BoxShadow compatibility.',
			pr: '4 PRs',
			url: 'https://github.com/longbridge/gpui-component/pulls?q=author%3ABeratHundurel'
		}
	];

	const gpuiPullRequests = [
		{
			number: '#2557',
			title: 'highlighter: Highlight fenced code blocks in Markdown source',
			merged: 'Jul 13, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2557'
		},
		{
			number: '#2457',
			title: 'highlighter: prevent empty range style leaks',
			merged: 'Jun 11, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2457'
		},
		{
			number: '#2408',
			title: 'text: support native multi-click selection in TextView',
			merged: 'May 29, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2408'
		},
		{
			number: '#2402',
			title: 'chore: Bump gpui for BoxShadow inset',
			merged: 'May 27, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2402'
		},
		{
			number: '#2400',
			title: 'text: Improve markdown code block rendering performance',
			merged: 'May 26, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2400'
		},
		{
			number: '#2397',
			title: 'tabs: Fix segmented indicator flicker',
			merged: 'May 26, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2397'
		},
		{
			number: '#2320',
			title: 'menu_story: avoid popup-menu resize on shortcut load',
			merged: 'Apr 30, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2320'
		},
		{
			number: '#2286',
			title: 'sidebar: Add click_to_toggle functionality',
			merged: 'Apr 24, 2026',
			url: 'https://github.com/longbridge/gpui-component/pull/2286'
		}
	];

	const projects = [
		{
			name: 'palette-themify',
			kicker: 'Theme generator for editors',
			description:
				'Web and TUI application that turns an image or theme file into VS Code and Zed themes. Svelte frontend, Go API, Zig palette extraction core.',
			stack: ['Svelte', 'Go', 'Zig'],
			url: 'https://github.com/BeratHundurel/palette-themify',
			snippet: `$ palette-themify ./sunset.jpg --target zed\n> extracting palette [zig core]\nok 8 colors mapped\nok theme.json ready`,
			featured: true
		},
		{
			name: 'go-chat',
			kicker: 'Real-time WebSocket chat',
			description:
				'WhatsApp-style chat application built with Templ, Gorilla WebSockets, and TailwindCSS, with server-rendered views and live message push.',
			stack: ['Go', 'Templ', 'WebSockets'],
			url: 'https://github.com/BeratHundurel/go-chat',
			snippet: `$ go run .\n> websocket hub :8080\nok /chat rendered`
		},
		{
			name: 'microservices',
			kicker: 'Multi-API service architecture',
			description:
				'Three-service system exploring REST and gRPC boundaries, service ownership, and Docker-based local orchestration.',
			stack: ['Go', 'gRPC', 'REST', 'Docker'],
			url: 'https://github.com/BeratHundurel/order-auth-currency-microservices',
			snippet: `$ docker compose up\n> api-gateway :8080\n> order service :50051`
		},
		{
			name: 'sln-runner',
			kicker: '.NET solution launcher',
			description:
				'Terminal UI that scans folders for .NET solutions, lets you pick one interactively, and launches it with configured settings.',
			stack: ['Rust', 'Ratatui'],
			url: 'https://github.com/BeratHundurel/sln-runner',
			snippet: `$ sln-runner ./projects\n> 6 solutions found\n> MyApi [http]`
		},
		{
			name: 'go-asteroids',
			kicker: '2D game loop in Go',
			description:
				'Asteroids-inspired shooter built with Ebiten. The loop scales difficulty over time with tighter motion and collision margins.',
			stack: ['Go', 'Ebiten'],
			url: 'https://github.com/BeratHundurel/go-asteroids',
			snippet: `$ go run .\n> window 800x600 at 60 fps\nok wave 1`
		},
		{
			name: 'rust-text-editor',
			kicker: 'Desktop editor experiment',
			description:
				'Minimal Rust text editor using Iced, covering core editing primitives and syntax highlighting.',
			stack: ['Rust', 'Iced'],
			url: 'https://github.com/BeratHundurel/rust-text-editor',
			snippet: `$ ./text-editor ./main.rs\n> syntax rust\nok tokens highlighted`
		}
	];

	const experience = [
		{
			company: 'Printomi',
			url: 'https://printomi.com',
			role: 'Full Stack Engineer, Contract',
			period: 'Nov 2024 - Present',
			location: 'Istanbul',
			summary: 'Printing software for customers, shops, and production workflows.',
			items: [
				'Built REST APIs for mobile users and shop operations.',
				'Implemented RabbitMQ workflows for distributed print jobs.',
				'Maintained PostgreSQL, Docker, IIS, CUPS, and IPP integrations.',
				'Added CI, formatting checks, and Testcontainers-based automation.'
			]
		},
		{
			company: 'Webbilir',
			url: 'https://webbilir.com',
			role: 'Full Stack Engineer',
			period: 'Jun 2023 - Jan 2026',
			location: 'Maslak, Istanbul',
			summary: 'Digital agency delivering e-commerce and marketing solutions.',
			items: [
				'Built and maintained production web applications with .NET.',
				'Improved Core Web Vitals by more than 50% on key e-commerce pages.',
				'Worked with SQL Server and EF Core using a database-first approach.',
				'Mentored junior developers through reviews and debugging sessions.'
			]
		}
	];
</script>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-nav" aria-label="Primary navigation">
	<div class="nav-left">
		<a class="brand-lockup" href="#main" aria-label="Berat Hündürel home">
			<span class="brand-mark">BH</span>
			<span class="brand-text">Berat Hündürel</span>
		</a>
	</div>
	<nav class="nav-links" aria-label="Sections">
		<a href="#experience">Experience</a>
		<a href="#open-source">Open source</a>
		<a href="#projects">Projects</a>
		<a href="#skills">Skills</a>
	</nav>
	<div class="nav-actions">
		<button
			class="theme-toggle"
			type="button"
			aria-label={theme === 'dark' ? 'Use day theme' : 'Use night theme'}
			title={theme === 'dark' ? 'Day theme' : 'Night theme'}
			onclick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
		</button>
		<a class="nav-cta" href="mailto:berat.hundurel@hotmail.com">Email</a>
	</div>
</header>

<main id="main" class="page-shell">
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-copy-block">
			<p class="role-line">Full-stack engineer</p>
			<h1 id="hero-title">Backend-first, across the stack.</h1>
			<p class="hero-copy">{heroCopy}</p>
			<div class="hero-actions" aria-label="Primary actions">
				<a
					class="button button-primary"
					href="/Berat_Hundurel_FullStack_Engineer.pdf"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
				<a class="button" href="https://github.com/BeratHundurel" target="_blank" rel="noreferrer">
					GitHub
				</a>
			</div>
		</div>

		<aside class="hero-profile" aria-label="Profile summary">
			<div class="portrait-frame">
				<enhanced:img
					class="portrait"
					src="../lib/assets/avatar-retina.jpg"
					alt="Portrait of Berat Hündürel"
				/>
			</div>
			<div class="profile-card">
				<p class="profile-name">Berat Hündürel</p>
				<p class="profile-detail">
					Building printing infrastructure and internal tools at Printomi.
				</p>
				<a
					class="profile-link"
					href="https://www.linkedin.com/in/berat-h%C3%BCnd%C3%BCrel-1197b9253"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
			</div>
		</aside>
	</section>

	<section class="signal-strip" aria-label="Portfolio highlights">
		{#each quickStats as stat (stat.label)}
			<article class="signal-card">
				<p class="signal-label">{stat.label}</p>
				<strong>{stat.value}</strong>
				<span>{stat.detail}</span>
			</article>
		{/each}
	</section>

	<section
		id="experience"
		class="section-block experience-section"
		aria-labelledby="experience-title"
	>
		<div class="section-intro">
			<h2 id="experience-title">Work experience.</h2>
			<p>
				I mainly build backend services, but I also work on the UI, infrastructure, and deployment
				needed to run them.
			</p>
		</div>

		<div class="experience-stack">
			{#each experience as job (job.company)}
				<article class="experience-card">
					<div class="experience-heading">
						<div>
							<h3><a href={job.url} target="_blank" rel="noreferrer">{job.company}</a></h3>
							<p>{job.summary}</p>
						</div>
						<div class="experience-meta">
							<span>{job.role}</span>
							<span>{job.period}</span>
							<span>{job.location}</span>
						</div>
					</div>
					<ul class="work-points">
						{#each job.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</section>

	<section
		id="freelance-work"
		class="section-block freelance-section"
		aria-labelledby="freelance-title"
	>
		<div class="section-intro">
			<h2 id="freelance-title">Need a website for your business?</h2>
			<p>
				I also take on freelance web projects. These concept builds show how I approach SaaS,
				construction, and healthcare websites.
			</p>
		</div>

		<div class="web-work-grid">
			{#each freelanceProjects as project (project.name)}
				<a
					class="web-work-card"
					class:featured={project.featured}
					href={project.url}
					target="_blank"
					rel="noreferrer"
				>
					<div class="web-work-media">
						<picture>
							{#if project.singleColumnImage}
								<source media="(max-width: 760px)" srcset={project.singleColumnImage} />
							{/if}
							<img
								src={project.image}
								width={project.width}
								height={project.height}
								loading="lazy"
								decoding="async"
								alt={project.alt}
							/>
						</picture>
					</div>
					<div class="web-work-copy">
						<div>
							<p class="web-work-type">{project.category}</p>
							<h3>{project.name}</h3>
						</div>
						<p>{project.description}</p>
						<span class="web-work-link">View live site <span aria-hidden="true">↗</span></span>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section id="open-source" class="section-block oss-section" aria-labelledby="oss-title">
		<div class="section-intro">
			<h2 id="oss-title">Open-source work in GPUI Component.</h2>
			<p>
				I've had eight pull requests merged into Longbridge's Rust component library, covering text
				selection, syntax highlighting, rendering performance, and UI fixes.
			</p>
		</div>

		<div class="oss-layout">
			<div class="oss-visual">
				<a href="https://github.com/longbridge/gpui-component" target="_blank" rel="noreferrer">
					<img
						src="/gpui-component-og.png"
						width="1200"
						height="600"
						loading="eager"
						alt="GitHub preview for the longbridge gpui-component repository"
					/>
				</a>
				<div class="oss-caption">
					<p>gpui-component</p>
					<span>Rust components for native desktop applications using GPUI.</span>
				</div>
			</div>

			<div class="oss-highlights">
				{#each gpuiHighlights as item (item.title)}
					<a class="oss-card" href={item.url} target="_blank" rel="noreferrer">
						<div>
							<h3>{item.title}</h3>
							<p>{item.detail}</p>
						</div>
						<span>{item.pr}</span>
					</a>
				{/each}
			</div>
		</div>

		<div class="pr-list" aria-label="Merged gpui-component pull requests">
			{#each gpuiPullRequests as pr (pr.number)}
				<a class="pr-row" href={pr.url} target="_blank" rel="noreferrer">
					<span class="pr-number">{pr.number}</span>
					<span class="pr-title">{pr.title}</span>
					<span class="pr-date">{pr.merged}</span>
				</a>
			{/each}
		</div>
	</section>

	<section id="projects" class="section-block projects-section" aria-labelledby="projects-title">
		<div class="section-intro">
			<h2 id="projects-title">Personal projects.</h2>
			<p>Side projects spanning editor themes, terminal tools, desktop apps, and Go services.</p>
		</div>

		<div class="projects-grid">
			{#each projects as project (project.name)}
				<a
					class="project-card"
					class:featured={project.featured}
					href={project.url}
					target="_blank"
					rel="noreferrer"
				>
					<div class="project-main">
						<p class="project-kicker">{project.kicker}</p>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<div class="tag-row" aria-label={`${project.name} stack`}>
							{#each project.stack as tag (tag)}
								<span>{tag}</span>
							{/each}
						</div>
					</div>
					<pre><code>{project.snippet}</code></pre>
				</a>
			{/each}
		</div>
	</section>

	<section id="skills" class="section-block skills-section" aria-labelledby="skills-title">
		<div class="section-intro compact">
			<h2 id="skills-title">Tools I reach for.</h2>
			<p>
				I work mostly with Go and .NET, with Svelte or React on the frontend and Docker and CI for
				delivery.
			</p>
		</div>

		<div class="skills-grid">
			{#each technicalSkills as skillGroup (skillGroup.label)}
				<article class="skill-card">
					<h3>{skillGroup.label}</h3>
					<div class="tag-row">
						{#each skillGroup.items as skill (skill)}
							<span>{skill}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>
</main>

<footer class="site-footer">
	<p>Available for backend and full-stack engineering work.</p>
	<div class="footer-links">
		<a href="mailto:berat.hundurel@hotmail.com">Email</a>
		<a href="https://github.com/BeratHundurel" target="_blank" rel="noreferrer">GitHub</a>
		<a
			href="https://www.linkedin.com/in/berat-h%C3%BCnd%C3%BCrel-1197b9253"
			target="_blank"
			rel="noreferrer"
		>
			LinkedIn
		</a>
	</div>
</footer>
