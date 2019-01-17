require('dotenv').config() // we need our dotenv stuff
// https://github.com/romuloalves/micro-post/blob/master/src/index.js

module.exports = exports = function (fn) {
  return (req, res) => {
    res.setHeader('Access-Control-Request-Method', 'POST, GET')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    // set this with your own URL
    res.setHeader(
      'Access-Control-Allow-Origin',
      process.env.STRIPE_ALLOW_DOMAIN
    )
    const { method } = req
    if (method === 'GET') {
      return {
        message: 'Emailed sent',
        timestamp: new Date().toISOString()
      }
    }
  }
}