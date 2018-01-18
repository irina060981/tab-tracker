const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const IsAuthenticated = require('./policies/IsAuthenticated')

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

  app.get('/bookmarks',
    IsAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    IsAuthenticated,
    BookmarksController.post)
  app.post('/bookmarks/delete',
    IsAuthenticated,
    BookmarksController.delete)

  app.get('/history',
    IsAuthenticated,
    HistoryController.index)
  app.post('/history',
    IsAuthenticated,
    HistoryController.post)
}
