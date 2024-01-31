<script>
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.pcss';
	export let data;
	$: username = data.username;
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Navbar {username} />
<slot />
