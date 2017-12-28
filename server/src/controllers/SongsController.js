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
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetched songs'
      })
    }
  }
}
