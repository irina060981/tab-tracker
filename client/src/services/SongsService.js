import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
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
