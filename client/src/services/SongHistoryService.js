import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('history', {
      params: { userId: params.userId }
    })
  },
  post (params) {
    return Api().post('history', params)
  }
}
