const { json, send, run } = require("micro");
const axios = require('axios');
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN_SECRET;

module.exports = async (req, res) => {
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if(err){
        //return an error message
      }else{
        //token was verified, pass the body hasura
        const serverRes = await axios
          .post('https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
          req.body,
          {
            headers: {
              'X-Hasura-Access-Key': process.env.ACCESS_KEY
            }
          }
        );

        //send response from hasura back to client
        res.send(serverRes);
      }
    })
  }
}
