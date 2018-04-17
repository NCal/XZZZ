const { Router } = require('express')
const pool = require('../../Data/index')
const router = Router()
const uniqid = require('uniqid')

router.post('/redirect', (req, res, next) => {
  console.log('posting redirect', req.body)
  console.log(req.body)

  pool.query(
    `SELECT * FROM links WHERE tag =($1)`,
    [req.body.tag],
    (err, response) => {
      if (err) return next(err)
      res.json(response.rows)
    }
  )
})

module.exports = router
