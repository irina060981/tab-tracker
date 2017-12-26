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
			<v-btn :to="{name: 'login'}" flat v-if="!$store.state.isUserLoggedIn" >Login</v-btn>
			<v-btn :to="{name: 'register'}" flat v-if="!$store.state.isUserLoggedIn" >Sign up</v-btn>
			<v-btn @click="logout" flat v-if="$store.state.isUserLoggedIn" >Log out</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to home page
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>
	.toolbar__title a {
		color:inherit;
		text-decoration: none;
	}
</style>