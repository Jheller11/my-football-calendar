const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const cors = require('cors')

// ajax request for refreshing calendar
router.post('/refresh', cors(), (req, res) => {
  async function f() {
    let data = await fetch(
      'http://api.football-data.org/v2/competitions/2021/matches',
      {
        headers: {
          'X-Auth-Token': process.env.FOOTBALL_DATA_KEY
        }
      }
    )
    let json = await data.json()
    res.send(json)
  }
  f()
  // use this data to fetch schedule from API, return data to browser
})

// get calendar
router.get('/', (req, res) => {
  res.render('calendar')
})

module.exports = router
