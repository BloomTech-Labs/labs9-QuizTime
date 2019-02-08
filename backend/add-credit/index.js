require('dotenv').config()
const { send, json, run } = require('micro')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { GraphQLClient } = require('graphql-request')

module.exports = (req, res) =>
  run(req, res, async (req, res) => {
    try {
      const token = await json(req)
      console.log('\n SERVER TOKEN: ', token)
      const client = new GraphQLClient(
        'https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
        {
          headers: {
            'X-Hasura-Access-Key': process.env.X_HASURA_ACCESS_KEY,
            'X-Hasura-Role': 'user',
            'X-Hasura-User-Id': `${token.sub}`
          }
        }
      )

      const mutation = `
        mutation update_teacher {
        update_teacher(
          where: {id: {_eq: "${token.sub}"}},
          _inc: {
            credits: 500,
          })
        {
          returning {
            id
            credits
          }
        }
        }
      `
      console.log('\n TOKEN ID', token.id)
      const charge = await stripe.charges.create({
        amount: 100, //* can be extracted from token
        source: token.id, //* pending transaction id
        currency: 'usd', //* can be extracted from token
        description: 'quiztime charge'
      })
      console.log('\n SERVER CHARGE: ', charge)
      if (charge.status === 'succeeded') {
        res.setHeader('Access-Control-Request-Method', 'POST')
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        )
        res.setHeader(
          'Access-Control-Allow-Origin',
          process.env.STRIPE_ALLOW_DOMAIN
        )
        const data = await client.request(mutation)
        send(res, 200, data)
      } else {
        send(res, 400, { message: 'charge failed to complete' })
      }
    } catch (error) {
      send(res, 400, error)
    }
  })
