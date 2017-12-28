<template>
 	<panel title="Song Metadata">
	  	<v-layout>
		  	<v-flex xs6>
	          <div class="song-title">{{song.title}}</div>
	          <div class="song-artist">{{song.artist}}</div>
	          <div class="song-genre">{{song.genre}}</div>
		  	</v-flex>

		  	<v-flex xs6>
	  		  <img class="album-image" :src="song.albumImage">
	  		  <p class="album-title">{{song.album}}</p>
	  		</v-flex>
	  	</v-layout>
	</panel>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    components: {
      Panel
    },
    props: [
      'song'
    ]
  }
</script>

<style scoped>
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
