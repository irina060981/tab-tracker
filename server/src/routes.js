const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoryController = require('./controllers/HistoryController')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.get('/songs', SongsController.index)
  app.post('/songs', SongsController.post)
  app.get('/songs/:songId', SongsController.show)
  app.put('/songs/:songId/edit', SongsController.edit)

  app.get('/bookmarks', BookmarksController.index)
  app.post('/bookmarks', BookmarksController.post)
  app.post('/bookmarks/delete', BookmarksController.delete)

  app.get('/history', HistoryController.index)
  app.post('/history', HistoryController.post)
}
