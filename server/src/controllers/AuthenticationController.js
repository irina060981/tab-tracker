const {User} = require('../models')

const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()

      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      // email already exists
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Email was not correct.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password was not correct.'
        })
      }

      const userJSON = user.toJSON()

      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: 'Some problems with login.'
      })
    }
  }
}
