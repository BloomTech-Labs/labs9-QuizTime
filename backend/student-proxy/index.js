require('dotenv').config()
const { json, send, run } = require("micro");
const axios = require('axios');
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN_SECRET;

const get_quiz_query = (student_id, quiz_id) => {
  return `
    {
    quiz(where: {id: {_eq: ${quiz_id}}}){
      id
      major_questions{
        student_answers(where: {student_id: {_eq: ${student_id}}}){
          id
          correct
          student_answer
        }
        id
        prompt
        answers{
          id
          correct_answer
          response
        }
        minor_questions{
          student_answers(where: {student_id: {_eq: ${student_id}}}){
            id
            correct
            student_answer
          }
          id
          prompt
          answers{
            id
            correct_answer
            response
          }
        }
      }
    }
  }
  `
}

const craftPost = async (req, dcToken) => {
  let js = await json(req);
  switch(js.type){
    case "get_quiz_query":
      return {"query": `${get_quiz_query(dcToken.student_id, dcToken.quiz_id)}`}
      break;
    case "insert_student_major_answer":
      //add function to craft mutation
      break;
    case "insert_student_minor_answer":
      //add function to craft mutation here
      break;
    case "get_quiz_results_query":
      //add query to retrieve all the answers, either precalcing them
      //or collating them for easy calc on front end
      break;
  }
}

module.exports = async (req, res) => {
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if(err){
        //return an error message
        send(res, 400, {message: "Invalid Token"})
      }else{
        //token was verified
        //figure out what needs to be posted to hasura and pass it
        let dbPost = craftPost(req, decodedToken);

        const serverRes = await axios
          .post('https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
          dbPost,
          {
            headers: {
              'X-Hasura-Access-Key': process.env.ACCESS_KEY
            }
          }
        );

        //send response from hasura back to client
        send(res, 200, serverRes);
      }
    })
  }
}
