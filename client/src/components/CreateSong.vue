<template>
<v-layout row>
    <v-flex xs4>

      <panel title="Create a new song">
        <div class="pl-4 pr-4 pt-2 pb-2">
          
             <v-text-field
                name="title"
                label="title"
                v-model="song.title"
              ></v-text-field>

             <v-text-field
                name="artist"
                label="artist"
                v-model="song.artist"
              ></v-text-field>

             <v-text-field
                name="genre"
                label="genre"
                v-model="song.genre"
              ></v-text-field>

             <v-text-field
                name="album"
                label="album"
                v-model="song.album"
              ></v-text-field>

             <v-text-field
                name="albumImage"
                label="albumImage"
                v-model="song.albumImage"
              ></v-text-field>

             <v-text-field
                name="youtubeId"
                label="youtubeId"
                v-model="song.youtubeId"
              ></v-text-field>
        </div>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            name="lyrics"
            label="lyrics"
            v-model="song.lyrics"
            multi-line
          ></v-text-field>

         <v-text-field
            name="tab"
            label="tab"
            v-model="song.tab"
            multi-line
          ></v-text-field>

          <p><v-btn class="green" dark @click="create">Create</v-btn></p>
        </div>
      </panel>
    </v-flex>


</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
