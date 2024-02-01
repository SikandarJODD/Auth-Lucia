<script>
	import { Toaster } from '$lib/components/ui/sonner';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.pcss';
	export let data;
	$: username = data.username;
	import { ModeWatcher } from 'mode-watcher';
</script>

<!-- Toaster to show toast  -->
<Toaster />
<!-- for Dark & Light Mode : ModeWatcher -->
<ModeWatcher />

<Navbar {username} />
<slot />
