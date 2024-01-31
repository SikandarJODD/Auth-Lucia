<script lang="ts">
	import { enhance } from '$app/forms';

	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next',
			label: 'Next.js'
		},
		{
			value: 'astro',
			label: 'Astro'
		},
		{
			value: 'nuxt',
			label: 'Nuxt.js'
		}
	];
</script>

<div class="flex h-[calc(100vh-65px)] items-center justify-center">
	<Card.Root class="mx-3 w-full md:mx-0 md:w-[375px]">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Create an account</Card.Title>
			<Card.Description>Enter your Username below to create your account</Card.Description>
		</Card.Header>
		<form method="post" use:enhance>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="username">Username</Label>
					<Input id="username" type="text" placeholder="John" name="username" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="*******" />
				</div>
			</Card.Content>
			<Card.Footer class="pb-2">
				<Button class="w-full">Create account</Button>
			</Card.Footer>
		</form>
		<Card.Footer class="flex justify-center ">
			<div>Already have an account? <a href="/login" class="underline">Login</a></div>
		</Card.Footer>
	</Card.Root>
</div>
