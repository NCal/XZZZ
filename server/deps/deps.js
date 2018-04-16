let deps = {
  express: require('express'),
  CryptoJS: require('crypto-js'),
  rand: require('random-number'),
  Nexmo: require('nexmo'),
  nexmoAuth: require('../../Data/hush'),
  ObjectID: require('mongodb').ObjectID,
  ethConv: require('ethjs-unit'),
  nodemailer: require('nodemailer'),
  hush: require('../../Data/hush'),
  urlParse: require('url-parse'),
  login: require('../routes/login'),
  signup: require('../routes/signup'),
  verify: require('../routes/verify'),
  subscribe: require('../routes/subscribe'),
  unsubscribe: require('../routes/unsubscribe'),
  newuser: require('../routes/newuser'),
  validated: require('../routes/validated'),
  transactions: require('../routes/transactions'),
  mongoose: require('mongoose'),
  User: require('../../Models/user.js'),
  bcrypt: require('bcryptjs'),
  serverSocketData: require('../../websocket/serverSocketData')
}
// console.log('deps ex', deps.express)
module.export = deps
