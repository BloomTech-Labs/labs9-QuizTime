const { json, send, run } = require('micro');
const nm = require("nodemailer");
const { GraphQLClient } = require('graphql-request');
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN_SECRET;

const emailStudents = () => {
  const mailer = nm.createTransport({
    service: "SendGrid",
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD
    }
  });

  const query = `
    query {
      class_quiz(where: {due_date: {_eq: ${Date.now()} } } ) {
        quiz_id
        class{
          students{
            email
          }
        }
      }
    }
  `

  const generateToken = (email, quiz_id) => {
    const payload = {email, quiz_id};
    const options = {
      expiresIn: '3d',
      jwtid: '1234'
    };
    return jwt.sign(payload, SECRET, options);
  }

  const client = new GraphQLClient(
    'https://quiztime-hasura.herokuapp.com/v1alpha1/graphql',
    {
      headers: {
        'X-Hasura-Access-Key': process.env.HASURA_ACCES_KEY
      }
    }
  )

  const data = await client.request(query);
  data.class_quiz.forEach(quiz => {
    quiz.class.students.forEach(student => {
      const msg = {
        to: student.email,
        from:'', //add our email no-reply@something
        subject: "You have a quiz available to take!",
        text: `You have a quiz available, click <a href="https//quiztime.now.sh/student?token=${generateToken(student.email, quiz.quiz_id)} here to take it!`
      };
      mailer.sendMail(msg, (err, info) => {
        if(err) {
          console.log('error: ', err)
        }
      });
    })
  })
}

module.exports = () => setInterval(emailStudents, 86400000)
