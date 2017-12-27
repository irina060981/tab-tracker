<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>

      <panel title="Songs">

        <v-btn fab dark small absolute right class="green accent-2" :to="{name: 'songs-create'}" slot="action">
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs" :key="song.id">

          <v-layout row class="song" v-if="song.title !== null">
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <p><v-btn class="green" dark :to="{name: 'song-view', params: {songId: song.id}}">View</v-btn></p>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImage">
            </v-flex>

          </v-layout>

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
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
  .song {
    padding: 20px 0;
    height: 330px;
    overflow: hidden;
  }

  .song > div {
    overflow: hidden;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  } 
</style>
