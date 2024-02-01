<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { form, enhance, errors } = superForm(data.form, {
		resetForm: true,
		onUpdated: ({ form }) => {
			console.log(form);

			if (form.valid) {
				toast.success('Log In Successfully!');
				setTimeout(() => {
					goto('/protected');
				}, 600);
			} else {
				toast.error('Please fill the form correctly!');
			}
		}
	});
</script>

<!-- To Debug the Application  -->
<!-- <SuperDebug data={$form} /> -->

<div class="flex h-[calc(100vh-65px)] items-center justify-center">
	<Card.Root class="mx-3 w-full md:mx-0 md:w-[375px]">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Login to Continue</Card.Title>
			<Card.Description>Enter your Username below to login</Card.Description>
		</Card.Header>
		<form method="post" use:enhance>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="username">Username</Label>
					<Input
						id="username"
						type="text"
						placeholder="John"
						name="username"
						bind:value={$form.username}
					/>
					{#if $errors.username}
						<span class="text-sm text-red-500">
							{$errors.username}
						</span>
					{/if}
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						id="password"
						type="password"
						name="password"
						placeholder="*******"
						bind:value={$form.password}
					/>
					{#if $errors.password}
						<span class="text-sm text-red-500">
							{$errors.password}
						</span>
					{/if}
				</div>
			</Card.Content>
			<Card.Footer class="pb-2">
				<Button type="submit" class="w-full">Login</Button>
			</Card.Footer>
		</form>
		<Card.Footer class="flex justify-center ">
			<div>Create new account? <a href="/signup" class="underline">SignUp</a></div>
		</Card.Footer>
	</Card.Root>
</div>
