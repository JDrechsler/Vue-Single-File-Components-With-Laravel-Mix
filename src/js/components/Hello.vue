<template>
	<div class="hello">
		<p>
			<h1>Hello Component</h1>
		</p>
		Message von App-Component: {{message}}
	</div>
</template>

<script>
	import Hello from './Hello.vue'
	export default {
		props: ['message'],
		data() {
			return {
				message2: 'Meine component Message'
			}
		}
	}

</script>

<style>
	.hello {
		color: red
	}
</style>