const {Bookmark, Song} = require('../models')

const _ = require('lodash')
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
      const {UserId, SongId} = req.body
      const checkBookmark = await Bookmark.findOne({
        where: {
          SongId: SongId,
          UserId: UserId
        }
      })
      if (!checkBookmark) {
        const bookmark = await Bookmark.create({
          UserId: UserId,
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
      console.log('********************************')
      console.log('req.body', req.body)
      console.log('id', parseInt(req.body.id))

      const bookmark = await Bookmark.findById(req.body.id)
      await bookmark.destroy()

      console.log('delete bookmark', bookmark)
      console.log('********************************')
      res.send(null)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark'
      })
    }
  }
}
