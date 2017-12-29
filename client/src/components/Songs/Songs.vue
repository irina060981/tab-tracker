<template>
  <div>
    <v-layout>
      <v-flex xs10 offset-xs1>
          <song-search-panel />
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs10 offset-xs1>
          <songs-panel />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import SongsPanel from '@/components/Songs/SongsPanel'
  import SongSearchPanel from '@/components/Songs/SongSearchPanel'

  export default {
    components: {
      SongsPanel, SongSearchPanel
    }
  }
</script>

<style scoped>

</style>
