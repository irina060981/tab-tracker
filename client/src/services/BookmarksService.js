import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('bookmarks', {
      params: { songId: params.songId, userId: params.userId }
    })
  },
  post (params) {
    return Api().post('bookmarks', params)
  },
  delete (bookmarkId) {
    return Api().post('bookmarks/delete', bookmarkId)
  }
}
