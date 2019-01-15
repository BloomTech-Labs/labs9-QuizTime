const { json } = require('micro')

module.exports = async (req, res) => {
  let token = await json(req)
  console.log('\n token:', token)
  return { email: token.email, id: token.card.id }
}
