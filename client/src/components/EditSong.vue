<template>
<v-layout row>
    <v-flex xs4>

      <panel title="Create a new song">
        <div class="pl-4 pr-4 pt-2 pb-2">
          
             <v-text-field
                name="title"
                label="title"
                v-model="song.title"
                required
                :rules="rules.required"
              ></v-text-field>

             <v-text-field
                name="artist"
                label="artist"
                v-model="song.artist"
                required
                :rules="rules.required"                
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
                required
                :rules="rules.required"
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
          <div class="error" v-html="error"></div>
          <p><v-btn class="green" dark @click="save">Save</v-btn></p>
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
      song: {},
      rules: {
        required: [(value) => !!value || 'The field is required!']
      },
      error: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  methods: {
    async save () {
      this.error = null
      const requiredKeys = ['title', 'artist', 'album']
      const areAllRequiredFieldsFilledIn = Object.keys(this.song).every(function (key) {
        if (requiredKeys.indexOf(key) > -1 && this[key] == null) {
          return false
        }
        return true
      }, this.song)

      if (!areAllRequiredFieldsFilledIn) {
        this.error = 'Please fill in all required fields'
      } else {
        try {
          await SongsService.put(this.song)
          this.$router.push({
            name: 'song-view', params: {songId: this.song.id}
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: #dd0000 !important;
    background-color: transparent !important;
  }
</style>
