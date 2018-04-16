// PACKAGES //
const path = require('path')
const fs = require('fs')
const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const socket = require('socket.io')
// const mongodb = require('mongodb')
// const mongoose = require('mongoose')
// const bluebird = require('bluebird')
// const serverSocketData = require('../websocket/serverSocketData')
// const User = require('../Models/user')
// const hush = require('../Data/hush')
const urlParse = require('url-parse')

const session = require('express-session')
// const MongoStore = require('connect-mongo')(session) // this lets the connect mongo middleware access the sessions
// mongoose.Promise = bluebird

// mongoose.connect(
//   'mongodb://heroku_dsnr7nnm:18nvj1kt98eejos7235ubtcq5b@ds119250.mlab.com:19250/heroku_dsnr7nnm',
//   {
//     poolSize: 1, /// <--pool connections into 1!
//     keepAlive: 1,
//     connectTimeoutMS: 30000,
//     useMongoClient: true,
//     promiseLibrary: require('bluebird')
//   }
// )
// const db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:'))

// db.once('open', function callback () {
//   console.log('db open')

//   var test = new User({
//     phone: '0',
//     addresses: ['test2']
//   })

//   User.insertMany([test])
// })

// IMPORTS //
const indexRoutes = require('./routes/index')
const shorten = require('./routes/shorten')

// CREATE APP //
const app = express()

// VIEW ENGINE //
app.set('view engine', 'html')
app.engine('html', function (path, options, callback) {
  fs.readFile(path, 'utf-8', callback)
})
app.set('json spaces', 0)

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../client')))

app.use(logger('dev'))

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(bodyParser.json())
  // .use(session({
  //   secret: hush.sessionSecret,
  //   resave: true,
  //   saveUninitialized: false,
  //   ip: mongoose.connection.remoteAddress,
  //   store: new MongoStore({
  //     mongooseConnection: mongoose.connection // create a sessions collection
  //   })
  // }))

// make user id available in templates
// app.use(function (req, res, next) {
//   res.locals.currentUser = req.session.userId
//   next()
// })

app.get('*', (req, res) => {
  // console.log('index req', req.session.userId)
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

// ROUTES //
app.use('/', indexRoutes)

// ERROR HANDLER //
app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(err.status || 500).send('something broke')
})

var port = process.env.PORT || 3000
var server = app.listen(port, function () {
  console.log('running at localhost:' + port)
})
