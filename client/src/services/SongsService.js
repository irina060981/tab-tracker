import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (songdata) {
    return Api().post('songs', songdata)
  }
}
