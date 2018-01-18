<template>
 	<panel title="Song Metadata">
	  	<v-layout v-if="song.id">
		  	<v-flex xs6>
	          <div class="song-title">{{song.title}}</div>
	          <div class="song-artist">{{song.artist}}</div>
	          <div class="song-genre">{{song.genre}}</div>
            <p>
                <v-btn class="green" dark :to="{name: 'song-edit', params: {songId: song.id}}">Edit</v-btn>
                <v-btn v-if="isUserLoggedIn && !bookmark" class="green" dark @click="setAsBookmark">Bookmark</v-btn>
                <v-btn v-if="isUserLoggedIn && bookmark" class="green" dark @click="removeBookmark">Unbookmark</v-btn>
            </p>
		  	</v-flex>

		  	<v-flex xs6>
	  		  <img class="album-image" :src="song.albumImage">
	  		  <p class="album-title">{{song.album}}</p>
	  		</v-flex>
	  	</v-layout>
	</panel>
</template>

<script>
  import {mapState} from 'vuex'
  import Panel from '@/components/Panel'
  import BookmarksService from '@/services/BookmarksService'

  export default {
    components: {
      Panel
    },
    props: [
      'song'
    ],
    computed: {
      ...mapState([
        'isUserLoggedIn'
      ])
    },
    data () {
      return {
        bookmark: null
      }
    },
    watch: {
      async song () {
        let bookmark = null
        if (this.$store.state.isUserLoggedIn) {
          bookmark = (await BookmarksService.index({
            songId: this.song.id
          })).data

          // console.log('bookmark', this.song.id, this.$store.state.user.id, bookmark)
          this.bookmark = bookmark
        }
      }
    },
    methods: {
      async setAsBookmark () {
        try {
          const bookmark = (await BookmarksService.post({
            SongId: this.song.id
          })).data
          this.bookmark = bookmark
          // console.log('bookmark - ', bookmark)
        } catch (err) {
          console.log(err)
        }
      },
      async removeBookmark () {
        try {
          await BookmarksService.delete({
            id: this.bookmark.id
          })
          this.bookmark = null
        } catch (err) {
          console.log(err)
        }
      }
    }
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
