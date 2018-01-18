<template>
  <div>
    <v-layout>
      <v-flex xs6 v-if="isUserLoggedIn">
          <songs-bookmarks />
          <recently-viewed-songs class="mt-2" />
      </v-flex>

      <v-flex xs6 class="ml-2" 
        :class="{
          xs6: isUserLoggedIn,
          xs12: !isUserLoggedIn
        }">
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

  import {mapState} from 'vuex'

  export default {
    components: {
      SongsPanel, SongSearchPanel, SongsBookmarks, RecentlyViewedSongs
    },
    computed: {
      ...mapState([
        'isUserLoggedIn'
      ])
    }
  }
</script>

<style scoped>

</style>
