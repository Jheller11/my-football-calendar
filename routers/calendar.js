const express = require('express')
const router = express.Router()

// ajax request for refreshing calendar
router.get('/refresh', (req, res) => {
  res.json(['1', '2'])
})

// get calendar
router.get('/', (req, res) => {
  res.render('calendar')
})

module.exports = router
