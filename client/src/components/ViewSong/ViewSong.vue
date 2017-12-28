<template>
  <div>
    <v-layout>
	  	<v-flex xs6>
		    <song-metadata :song="song"/>
	  	</v-flex>

		<v-flex xs6 class="ml-2">
        <youtube-view :youtubeId="song.youtubeId"/>
		</v-flex>
	</v-layout>
	<v-layout class="mt-2">
		<v-flex xs6>
        <text-area-song panel-title="Song lyrics" :content="song.lyrics"/>
	  	</v-flex>

	  	<v-flex xs6 class="ml-2">
        <text-area-song panel-title="Song tabs" :content="song.tab"/>
	  	</v-flex>
  	</v-layout>  	
  </div>
</template>

<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  import SongMetadata from '@/components/ViewSong/SongMetadata'
  import YoutubeView from '@/components/ViewSong/YoutubeView'
  import TextAreaSong from '@/components/ViewSong/TextAreaSong'

  export default {
    components: {
      Panel,
      SongMetadata,
      YoutubeView,
      TextAreaSong
    },
    data () {
      return {
        song: {}
      }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    }
  }
</script>

<style scoped>
</style>
