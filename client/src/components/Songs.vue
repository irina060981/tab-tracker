<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>

      <panel title="Songs">

        <v-btn fab dark small absolute right class="green accent-2" :to="{name: 'songs-create'}" slot="action">
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs" :key="song.id">
          {{ song.title }} -
          {{ song.artist }} -
          {{ song.album }}
        </div>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>

import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
      // songs: [
      //   {
      //     title: 'Float On',
      //     artist: 'Modest Mouse',
      //     album: 'Good News for People Who Love Bad News'
      //   }
      // ]
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
