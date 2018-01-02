const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let bookmark = null
      const {songId, userId} = req.query
      if (songId && userId) {
        bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
      }
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetched bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = await Bookmark.create(req.body)
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      })
    }
  }
}
