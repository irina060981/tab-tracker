import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: { search: search }
    })
  },
  post (songdata) {
    return Api().post('songs/', songdata)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}/edit`, song)
  }
}
