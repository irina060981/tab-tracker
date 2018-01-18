const {History, Song} = require('../models')

const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      let history
      const userId = req.user.id
      if (userId) {
        history = await History.findAll({
          where: {
            UserId: userId
          },
          include: [
            {
              model: Song
            }
          ]
        })
          .map(history => history.toJSON())
          .map(history => _.extend({
            historyId: history.id
          }, history.Song))
      }
      res.send(_.uniqBy(history, 'title') || [])
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch history'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body

      const history = await History.create({
        UserId: userId,
        SongId: songId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the history'
      })
    }
  }
}
