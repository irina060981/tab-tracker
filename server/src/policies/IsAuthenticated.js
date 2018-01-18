const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'You don\'t have access to this.'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}
