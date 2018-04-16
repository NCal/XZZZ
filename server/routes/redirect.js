const { Router } = require('express')
const pool = require('../../Data/index')
const router = Router()
const uniqid = require('uniqid')
// const ObjectID = require('mongodb').ObjectID

router.post('/redirect', (req, res, next) => {
  console.log('posting redirect', req.body)
  console.log(req.body)

  pool.query(
    `SELECT * FROM links WHERE tag =($1)`,
    [req.body.tag],
    (err, response) => {
      if (err) return next(err)
      // console.log('res', response)
      // we can redirect to other routes by user the redirect method on the express res object. doing this here to log all monsters after posting a new one
      // res.redirect('/monsters')
      res.json(response.rows)
    }
  )

  // pool.query(
  //   `SELECT * FROM links`,
  //   (err, response) => {
  //     if (err) return next(err)
  //     // console.log('res', response.body)
  //     // we can redirect to other routes by user the redirect method on the express res object. doing this here to log all monsters after posting a new one
  //     // res.redirect('/monsters')
  //     res.json(response.rows)
  //   }
  // )
})

module.exports = router
