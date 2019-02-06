require('dotenv').config();
const { json, send, run } = require('micro');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN_SECRET;
const CircularJSON = require('circular-json');

const get_student_query = student_id => {
  return `
  query {
    student(where: {id: {_eq: ${Number(student_id)}}}) {
      first_name
      last_name
    }
  }
  `;
};

const get_quiz_query = (student_id, quiz_id) => {
  return `
    query {
    quiz(where: {id: {_eq: ${parseInt(quiz_id, 10)}}}){
      id
      name
      description
      teacherByteacherId {
        email
      }
      major_questions{
        student_answers(where: {student_id: {_eq: ${parseInt(
          student_id,
          10
        )}}}){
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
          student_answers(where: {student_id: {_eq: ${parseInt(
            student_id,
            10
          )}}}){
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
  `;
};

const insert_student_major_answer_mutation = (
  student_id,
  { major_question_id, correct, student_answer }
) => {
  return `
    mutation insert_student_major_answer {
      insert_student_major_answer(
        objects: [{
          student_id: ${student_id},
          major_question_id: ${major_question_id},
          correct: ${correct},
          student_answer: ${student_answer}
        }]
      ) {
        returning {
          id
          major_question_id
          correct
          student_answer
        }
      }
    }
  `;
};

const insert_student_minor_answer_mutation = (
  student_id,
  { minor_question_id, correct, student_answer }
) => {
  return `
    mutation insert_student_minor_answer {
      insert_student_minor_answer(
        objects: [{
          student_id: ${student_id},
          minor_question_id: ${minor_question_id},
          correct: ${correct},
          student_answer: ${student_answer}
        }]
      ) {
        returning {
          id
          minor_question_id
          correct
          student_answer
        }
      }
    }
  `;
};

const insert_score = (quiz_id, student_id, { score, total }) => {
  return `
   mutation insert_score {
     insert_score(
       objects: [{
        quiz_id: ${quiz_id}
        student_id: ${student_id}
        score: ${score}
        total: ${total}
       }]
     ) {
      returning {
        id
        quiz_id
        student_id
        score
      }
     }
   }
  `;
};

const craftPost = (type, dcToken, data) => {
  switch (type) {
    case 'get_quiz_query':
      return {
        query: `${get_quiz_query(dcToken.student_id, dcToken.quiz_id)}`,
      };
      break;

    case 'get_student_query':
      return {
        query: `${get_student_query(dcToken.student_id)}`,
      };
      break;

    case 'insert_student_major_answer':
      return {
        query: `${insert_student_major_answer_mutation(
          dcToken.student_id,
          data
        )}`,
      };
      break;
    case 'insert_student_minor_answer':
      return {
        query: `${insert_student_minor_answer_mutation(
          dcToken.student_id,
          data
        )}`,
      };
      break;
    case 'insert_score':
      return {
        query: `${insert_score(dcToken.quiz_id, dcToken.student_id, data)}`,
      };
      break;
    case 'get_quiz_results_query':
      // add query to retrieve all the answers, either precalcing them
      // or collating them for easy calc on front end
      break;
    default:
      break;
  }
};

const handler = async (req, res) => {
  res.setHeader('Access-Control-Request-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Origin', process.env.STRIPE_ALLOW_DOMAIN);
  const {
    type,
    token,
    major_question_id,
    correct,
    student_answer,
    minor_question_id,
    score,
    total,
  } = await json(req);

  const data = {
    major_question_id,
    correct,
    student_answer,
    minor_question_id,
    score,
    total,
  };

  // if (req.headers.authorization) {
  //   jwt.verify(req.headers.authorization, SECRET, async (err, decodedToken) => {
  if (token) {
    jwt.verify(token, SECRET, async (err, decodedToken) => {
      if (err) {
        // return an error message
        send(res, 400, { message: 'Invalid Token' });
      } else {
        // token was verified
        // figure out what needs to be posted to hasura and pass it
        try {
          let dbPost = await craftPost(type, decodedToken, data);

          let serverRes = await axios.post(
            'https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
            dbPost,
            {
              headers: {
                'X-Hasura-Access-Key': process.env.X_HASURA_ACCESS_KEY,
              },
            }
          );

          send(res, 200, serverRes.data);
        } catch (e) {
          console.log(e.message || e.error);
          send(res, 500, { error: e.message || e.error });
        }
      }
    });
  }
};

module.exports = (req, res) => run(req, res, handler);
