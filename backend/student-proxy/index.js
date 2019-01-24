require('dotenv').config()
const { json, send, run } = require("micro");
const axios = require('axios');
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN_SECRET;

const get_quiz_query = (student_id, quiz_id) => {
  return `
    query {
    quiz(where: {id: {_eq: ${parseInt(quiz_id, 10)}}}){
      id
      major_questions{
        student_answers(where: {student_id: {_eq: ${parseInt(student_id, 10)}}}){
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
          student_answers(where: {student_id: {_eq: ${parseInt(student_id, 10)}}}){
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

const handler = async (req, res) => {
  const token = req.headers.authorization;
  if(token){
    jwt.verify(token, SECRET, async (err, decodedToken) => {
      if(err){
        //return an error message
        send(res, 400, {message: "Invalid Token"})
      }else{
        //token was verified
        //figure out what needs to be posted to hasura and pass it
        let dbPost = await craftPost(req, decodedToken);
        console.log(dbPost);
        try{
          let serverRes = await axios
            .post('https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
            dbPost,
            {
              headers: {
                'X-Hasura-Access-Key': process.env.ACCESS_KEY
              }
            }
          );
        }catch(e){
          console.log('err')
        }

        //send response from hasura back to client
      }
    })
  }
}

module.exports = (req, res) => run(req, res, handler);
