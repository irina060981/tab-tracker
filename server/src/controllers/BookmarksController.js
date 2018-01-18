const {Bookmark, Song} = require('../models')

const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      let bookmark
      const userId = req.user.id
      const {songId} = req.query
      if (songId && userId) {
        bookmark = await Bookmark.findOne({
          where: {
            SongId: songId,
            UserId: userId
          }
        })
        bookmark = bookmark || false
      } else if (userId) {
        bookmark = await Bookmark.findAll({
          where: {
            UserId: userId
          },
          include: [
            {
              model: Song
            }
          ]
        })
          .map(bookmark => bookmark.toJSON())
          .map(bookmark => _.extend({
            bookmarkId: bookmark.id
          }, bookmark.Song))

        bookmark = bookmark || []
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
      const userId = req.user.id
      const {SongId} = req.body
      const checkBookmark = await Bookmark.findOne({
        where: {
          SongId: SongId,
          UserId: userId
        }
      })
      if (!checkBookmark) {
        const bookmark = await Bookmark.create({
          UserId: userId,
          SongId: SongId
        })
        res.send(bookmark)
      } else {
        res.send(checkBookmark)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId = req.user.id
      const bookmark = await Bookmark.findOne({
        UserId: userId,
        id: req.body.id
      })

      if (!bookmark) {
        return res.status(403).send({
          error: 'You don\'t have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(null)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark'
      })
    }
  }
}
