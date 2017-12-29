const {Song} = require('../models')
const config = require('../config/config')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      let search = req.query.search

      if (search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({ // преобразуем в объект
              [key]: { $like: `%${search}%` }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }

      res.send(songs)
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
  },
  async edit (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the song'
      })
    }
  }
}
