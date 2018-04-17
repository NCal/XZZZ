const express = require('express')
const router = express.Router()
const redirect = require('./redirect')
const shorten = require('./shorten')
router.post('/shorten', shorten)
router.post('/redirect', redirect)

module.exports = router
