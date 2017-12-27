console.log('hello!')
const express = require('express')

/* Node.js body parsing middleware
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
*/

const bodyParser = require('body-parser')

/* Node.js CORS middleware
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain
from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
*/

const cors = require('cors')
const morgan = require('morgan') // HTTP request logger middleware for node.js

// работа с SQLDB
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: true}) // сначала подключаемся к DB а потом запускаем сервер, sequelize.sync({force: true})  - это принудительная очистка
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port} `)
  })
