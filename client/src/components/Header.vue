<template>
	<v-toolbar fixed class="green" dark>
		<v-toolbar-title class="mr-4 mt-0">
			<router-link :to="{name: 'home'}">TabTracker</router-link>
		</v-toolbar-title>

		<v-toolbar-items>
			<v-btn flat>Browse</v-btn>
		</v-toolbar-items>

		<v-spacer></v-spacer>

		<v-toolbar-items>
			<v-btn :to="{name: 'login'}" flat>Login</v-btn>
			<v-btn :to="{name: 'register'}" flat>Sign up</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
	.toolbar__title a {
		color:inherit;
		text-decoration: none;
	}
</style>