// packages
const express = require('express')
const app = express()
const override = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const path = require('path')

// middleware
app.use(bodyParser({ extended: true }))
app.use(override('_method'))
app.use(cookieParser())
app.use(express.static('public'))
app.use(helmet())

// views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// custom function to log requests
app.use((req, res, next) => {
  res.locals.title = 'My Soccer Calendar'
  console.log(req.body)
  next()
})

// home page
app.get('/', (req, res) => {
  res.render('home')
})

// page not found
app.get('*', (req, res) => {
  res.render('error', { error: '404 - Page not found.' })
})

// config port
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () =>
  console.log('server running on ' + app.get('port'))
)

// export app for testing purposes
module.exports = app
