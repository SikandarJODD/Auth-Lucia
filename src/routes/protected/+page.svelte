<script>
	export let data;
	let user = data.username;
</script>

<div class="flex h-[calc(100vh-65px)] flex-col items-center justify-center gap-3">
	<h1 class="text-xl font-bold md:text-4xl">Welcome to protected Page</h1>
	<h2 class=" text-lg font-semibold md:text-2xl">username: {user}</h2>
</div>
