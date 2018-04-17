const { Router } = require('express')
const pool = require('../../Data/index')
const router = Router()
const uniqid = require('uniqid')
// const ObjectID = require('mongodb').ObjectID

router.post('/shorten', (req, res, next) => {
  console.log('posting links', req.body)
  // const {link, protocol} = req.body
  const { link } = req.body
  // const fullLink = protocol + link
  const tag = uniqid.time()
  console.log('url', link)
  // pool.query('SELECT * FROM links ORDER BY id ASC', (err, fromdb) => {
  //   if (err) return next(err)
  //   console.log('from db', fromdb.rows)
  //   res.json(fromdb.rows)
  // })

  pool.query(
    `INSERT INTO links(url, tag) VALUES($1, $2)`,
    [link, tag],
    (err, response) => {
      if (err) return next(err)
      console.log('inserting')
      // we can redirect to other routes by user the redirect method on the express res object. doing this here to log all monsters after posting a new one
      // res.redirect('/monsters')
      // res.json(response.rows)
      pool.query('SELECT * FROM links ORDER BY id ASC', (err, fromdb) => {
        if (err) return next(err)
        console.log('from db', fromdb.rows)
        res.json(fromdb.rows)
      })
    }
  )
})


module.exports = router
