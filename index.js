const express = require('express')
const app = express()
const override = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// middleware
app.use(bodyParser({ extended: true }))
