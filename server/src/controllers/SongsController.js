const {Song} = require('../models')
const config = require('../config/config')

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetched songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      console.log('*************************************************')
      console.log('song', song)
      console.log('*************************************************')
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  }
}