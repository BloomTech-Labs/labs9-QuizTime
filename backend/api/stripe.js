require('dotenv').config()
const { send, json } = require('micro')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = async (req, res) => {
  try {
    const token = await json(req)
    const charge = await stripe.charges.create({
      amount: 1000,
      source: token.id, //* pending transaction id
      currency: 'usd',
      description: 'test charge'
    })
    console.log('\n CHARGE OBJECT: ', charge, '\n')
    //! This shouldn't be the backend response; it should be updated teacher model
    //! Need to check charge.status === 'succeeded'
    //! THEN update CREDITS on appropriate teacher record
    send(res, 200, charge)
  } catch (error) {
    console.log('\n ERROR', error, '\n')
    send(res, 400, error)
  }
}
