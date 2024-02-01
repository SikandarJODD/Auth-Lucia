<script>
	let tablerow = [
		{
			tech: 'Full Stack',
			name: 'Sveltekit',
			svg: `<svg viewBox="0 0 256 308" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244" fill="#FF3E00"/><path d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398" fill="#FFF"/></svg>`
		},
		{
			tech: 'Auth',
			name: 'Lucia Auth',
			link: 'https://v2.lucia-auth.com/logo.svg'
		},
		{
			tech: 'ORM',
			name: 'Drizzle ORM',
			svg: `<svg width="40" height="25" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="5.41766" height="22.979" transform="matrix(0.873028 0.48767 -0.497212 0.867629 24.459 24.3583)" fill="#C5F74F"/>
<rect width="5.41766" height="22.979" transform="matrix(0.873028 0.48767 -0.497212 0.867629 43.2793 12.6755)" fill="#C5F74F"/>
<rect width="5.41766" height="22.979" transform="matrix(0.873028 0.48767 -0.497212 0.867629 72.2383 12.676)" fill="#C5F74F"/>
<rect width="5.41766" height="22.979" transform="matrix(0.873028 0.48767 -0.497212 0.867629 53.4121 24.3583)" fill="#C5F74F"/>
</svg>`
		},
		{
			tech: 'Database',
			name: 'Supabase - Postgres SQL',
			svg: `<svg viewBox="0 0 109 113" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z" fill="url(#a)"/><path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z" fill="url(#b)" fill-opacity=".2"/><path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z" fill="#3ECF8E"/><defs><linearGradient id="a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse"><stop stop-color="#249361"/><stop offset="1" stop-color="#3ECF8E"/></linearGradient><linearGradient id="b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>`
		},
		{
			tech: 'CSS',
			name: 'Tailwind CSS, Shadcn-Svelte',
			svg: `<svg viewBox="0 0 256 154" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a"><stop stop-color="#2298BD" offset="0%"/><stop stop-color="#0ED7B5" offset="100%"/></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#a)"/></svg>`
		},
		{
			tech: 'Hosted',
			name: 'Vercel',
			svg: `<svg viewBox="0 0 256 222" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z"/></svg>`
		},
		{
			tech: 'Validation',
			name: 'Zod',
			svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 256 203"><defs><filter id="a" width="105.2%" height="106.5%" x="-2.2%" y="-2.8%" filterUnits="objectBoundingBox"><feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"/></filter><path id="b" d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0Zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243Z"/></defs><path fill="#18253F" d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z"/><path fill="#274D82" d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z"/><path fill="#274D82" d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"/><g transform="translate(2 1.51)"><use xlink:href="#b" filter="url(#a)"/><use xlink:href="#b" fill="#3068B7"/></g></svg>'
		}
	];
</script>

<div class="px-2">
	<table class="w-full md:mt-4 md:w-96">
		<tr>
			<th>Tech</th>
			<th>Frameworks & Library</th>
		</tr>
		{#each tablerow as item}
			<tr class="dark:odd:bg-gray-800/40 dark:hover:bg-gray-800/60">
				<td class="font-medium">{item.tech}</td>
				<td class="bottom-0 flex items-center gap-1.5 border-none font-medium">
					{#if item.tech === 'Auth'}
						<img src={item.link} width="20" height="20" alt="lucia-auth" />
					{:else}
						{@html item.svg}
					{/if}
					{item.name}</td
				>
			</tr>
		{/each}
	</table>
</div>

<style>
	td {
		border: 1px solid #8d8d8d;
		text-align: left;
		padding: 8px;
	}
	th {
		border: 1px solid #bdbdbd;
		border-radius: 10px;
		text-align: left;
		padding: 8px;
	}
</style>
