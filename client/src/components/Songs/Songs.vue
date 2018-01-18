<template>
  <div>
    <v-layout>
      <v-flex xs6>
          <songs-bookmarks />
          <recently-viewed-songs class="mt-2" />
      </v-flex>

      <v-flex xs6 class="ml-2">
          <song-search-panel />
          <songs-panel class="mt-2" />
      </v-flex>

    </v-layout>

  </div>
</template>

<script>
  import SongsPanel from '@/components/Songs/SongsPanel'
  import SongSearchPanel from '@/components/Songs/SongSearchPanel'
  import SongsBookmarks from '@/components/Songs/SongsBookmarks'
  import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'

  export default {
    components: {
      SongsPanel, SongSearchPanel, SongsBookmarks, RecentlyViewedSongs
    }
  }
</script>

<style scoped>

</style>
