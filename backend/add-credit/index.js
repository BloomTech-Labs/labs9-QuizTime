const { send, json, run } = require("micro");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { GraphQLClient } = require("graphql-request");

const client = new GraphQLClient(
  "https://quiztime-hasura.herokuapp.com/v1alpha1/graphql",
  {
    headers: {
      "X-Hasura-Access-Key": "lambdalabsquiztime"
    }
  }
);

//* query hardcoded to id: 1 until frontend provides current_user id

module.exports = (req, res) =>
  run(req, res, async (req, res) => {
    try {
      const token = await json(req);

      const query = `
    query {
      teacher(where: {email: {_eq: "${token.auth_email}"}}) {
        credits
      }
    }
    `;
      const mutation = `
  mutation update_teacher {
  update_teacher(
    where: {email: {_eq: "${token.auth_email}"}},
   _inc: {
      credits: 10,
    }
  ) {
    returning {
      id
      credits
    }
  }
}
`;
      const charge = await stripe.charges.create({
        amount: 1000, //* can be extracted from token
        source: token.id, //* pending transaction id
        currency: "usd", //* can be extracted from token
        description: "quiztime charge"
      });
      // console.log('\n CHARGE OBJECT: ', charge, '\n')
      // const data = await client.request(query)
      if (charge.status === "succeeded") {
        const data = await client.request(mutation);
        send(res, 200, data);
      } else {
        send(res, 400, { message: "charge failed to complete" });
      }
    } catch (error) {
      console.log("\n ERROR", error, "\n");
      send(res, 400, error);
    }
  });
