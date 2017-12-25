const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      // email already exists
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
    res.send({
      message: `Hello, ${req.body.email}! Your user was registered! Have fun!`
    })
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

      const isPasswordValid = (password === user.password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password was not correct.'
        })
      }

      const userJSON = user.toJSON()

      res.send({ user: userJSON })
    } catch (err) {
      // email already exists
      res.status(500).send({
        error: 'Some problems with login.'
      })
    }
  }
}
