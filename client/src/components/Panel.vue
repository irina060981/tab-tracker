<template>
  <div class = "white elevation-2" v-bind:class="addClass">
    <v-toolbar flat dense class="green" dark>
	  <v-toolbar-title dark>{{ title }}</v-toolbar-title>
    <slot name="action" />
  </v-toolbar>

	<div class="pl-4 pr-4 pt-2 pb-2">
		<slot>No slot content defined</slot>
	</div>

  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title', 'addClass'
  ]
}
</script>

<style scoped>

</style>
