require('dotenv').config()
const { json, send, run } = require('micro');
const nm = require("nodemailer");
const { GraphQLClient } = require('graphql-request');
const jwt = require('jsonwebtoken');
const SECRET = process.env.TOKEN_SECRET;

let mailTimer;

const generateToken = (email, quiz_id) => {
  const payload = {email, quiz_id};
  const options = {
    expiresIn: '3d',
    jwtid: '1234'
  };
  return jwt.sign(payload, SECRET, options);
}

const emailStudents = async () => {
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

const mailControl = async (req, res) => {
  const js = await json(req)
  switch(js.command){
    case "start":
      // mailTimer = setInterval(emailStudents, 8600000)
      break
    case "stop":
      // clearInterval(mailTimer)
      break
    case "testRun":
      // emailStudents()
      break
    case "generateToken":
      const js = await json(req)
      const token = generateToken(js.email, js.quiz_id)
      send(res, 200, token)

  }
}

module.exports = (req, res) => run(req, res, mailControl)
