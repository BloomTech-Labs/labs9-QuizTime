require('dotenv').config()
const { send, json } = require('micro')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { GraphQLClient } = require('graphql-request')

const post = require('../post')

const client = new GraphQLClient(
  'https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
  {
    headers: {
      'X-Hasura-Access-Key': 'lambdaschoolquiztime'
    }
  }
)

//* query hardcoded to id: 1 until frontend provides current_user id
const query = `
query {
  teacher(where: {id: {_eq: 1}}) {
    is_premium
    credits
  }
}
`

module.exports = post(async (req, res) => {
  try {
    const token = await json(req)
    const charge = await stripe.charges.create({
      amount: 1000, //* can be extracted from token
      source: token.id, //* pending transaction id
      currency: 'usd', //* can be extracted from token
      description: 'quiztime charge'
    })
    console.log('\n CHARGE OBJECT: ', charge, '\n')

    // const current = await client.request(query)
    const mutation = `
  mutation update_teacher {
  update_teacher(
    where: {id: {_eq: 1}},
    _set: {
      is_premium: true
    }
    _inc: {
      credits: 10,
    }
  ) {
    returning {
      id
      first_name
      is_premium
      credits
    }
  }
}
`
    const data = await client.request(mutation)
    send(res, 200, data)
  } catch (error) {
    console.log('\n ERROR', error, '\n')
    send(res, 400, error)
  }
})
