<template>
  <div>
    <v-layout>
      <v-flex xs6>
          <songs-bookmarks />
      </v-flex>

      <v-flex xs6 class="ml-2">
          <song-search-panel />
          <div class="mt-2">
            <songs-panel />
          </div>
      </v-flex>

    </v-layout>

  </div>
</template>

<script>
  import SongsPanel from '@/components/Songs/SongsPanel'
  import SongSearchPanel from '@/components/Songs/SongSearchPanel'
  import SongsBookmarks from '@/components/Songs/SongsBookmarks'

  export default {
    components: {
      SongsPanel, SongSearchPanel, SongsBookmarks
    }
  }
</script>

<style scoped>

</style>
