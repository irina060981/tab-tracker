const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let bookmark
      const {songId, userId} = req.query
      if (songId && userId) {
        bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
      }
      res.send(bookmark || false)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetched bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = await Bookmark.create({
        UserId: parseInt(req.body.UserId),
        SongId: parseInt(req.body.SongId)
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      // console.log('********************************')
      // console.log('req.body', req.body)
      // console.log('id', parseInt(req.body.id))

      const bookmark = await Bookmark.findById(req.body.id)
      await bookmark.destroy()

      // console.log('delete bookmark', bookmark)
      // console.log('********************************')
      res.send(null)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark'
      })
    }
  }
}
