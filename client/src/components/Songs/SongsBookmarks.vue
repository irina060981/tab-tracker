<template>
 	<panel title='Bookmarks'>
 		<v-data-table
 		  :headers='headers'
 		  :pagination.sync='pagination'
 		  :items='bookmarks'
 		>
 		<template slot="items" slot-scope="props">
 			<td class="text-xs-right">
 				{{props.item.title}}
 			</td>
 			<td class="text-xs-right">
 				{{props.item.artist}}
 			</td>
 		</template>
 		</v-data-table>
	</panel>
</template>

<script>
  import BookmarksService from '@/services/BookmarksService'
  import Panel from '@/components/Panel'
  import {mapState} from 'vuex'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        headers: [
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Artist',
            value: 'artist'
          }
        ],
        pagination: {
          sortBy: 'createdAt',
          descending: true
        },
        bookmarks: []
      }
    },
    computed: {
      ...mapState([
        'isUserLoggedIn',
        'user'
      ])
    },
    async mounted () {
      if (this.isUserLoggedIn) {
        this.bookmarks = (await BookmarksService.index()).data
      }
    }
  }
</script>

<style scoped>

</style>
