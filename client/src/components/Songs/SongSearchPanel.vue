<template>
	<panel title="Search the song">
	 <v-text-field
        name="search"
        label="Search by song title, artist, album or genre"
        v-model="search"
      ></v-text-field>
	</panel>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        search: ''
      }
    },
    watch: {
      search (value) {
        const route = {
          name: 'songs'
        }
        if (value !== '') {
          route.query = {
            search: value
          }
        }
        this.$router.push(route)
      },
      '$route.query.search': {
        immediate: true,
        handler (value) {
          this.search = value
        }
      }
    }
  }
</script>

<style scoped>

</style>
