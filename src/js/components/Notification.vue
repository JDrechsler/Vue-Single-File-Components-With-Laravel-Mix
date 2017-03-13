<template>
	<div class="notification">
		<p>
			<h1>Notification-Component</h1>
			<h2>{{message}}</h2>
		</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Hello World'
			}
		}
	}

</script>

<style>
	.notification {
		color: gold
	}
</style>