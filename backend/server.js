const { request } = require("graphql-request");

// grabs 5 students
const query = `
  query {
    student(limit: 5) {
      first_name
      last_name
      email
    }
  }
`;

// creates new teacher with the following attributes
const mutation = `
  mutation {
  insert_teacher(objects: [{
    email: "ko@ko.com",
    first_name: "koko",
    last_name:"hoho"
  }]) {
    returning {
      id
    }
  }
}
`;

// a single async function is exposed to @now/node
// as a microservice.

// https://zeit.co/docs/v2/deployments/official-builders/node-js-now-node/

module.exports = async (req, res) => {
  const data = await request(
    "https://quiztime-hasura.herokuapp.com/v1alpha1/graphql",
    mutation
  );
  return data;
};
