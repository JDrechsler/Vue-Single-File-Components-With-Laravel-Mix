<template>
	<div class="app">
		<p>
			<h1>App Component</h1>
		</p>

		<Hello v-bind:message="message"></Hello>

		<Notification></Notification>
	</div>
</template>

<script>
	import Notification from './Notification.vue'
	import Hello from './Hello.vue'

	export default {
		data() {
			return {
				message: 'App-component-message'
			}
		},
		components: {
			Notification,
			Hello
		}
	}

</script>

<style>
	.app {
		background-color: darkgray
	}
</style>