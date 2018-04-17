const express = require('express')
const router = express.Router()
// const rand = require('random-number')
// let token = rand.generator({ min: 1000, max: 9999, integer: true })
const redirect = require('./redirect')
const shorten = require('./shorten')
router.post('/shorten', shorten)
router.post('/redirect', redirect)
// router.post('/login', login)

module.exports = router
