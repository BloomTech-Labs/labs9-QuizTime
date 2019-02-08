require("dotenv").config();
const { json, send, run } = require("micro");
const nm = require("nodemailer");
const { GraphQLClient } = require("graphql-request");
const jwt = require("jsonwebtoken");
const SECRET = process.env.TOKEN_SECRET;

let mailTimer;

const generateToken = (email, quiz_id, student_id) => {
  const payload = { email, quiz_id, student_id };
  const options = {
    expiresIn: "3d",
    jwtid: "1234"
  };
  return jwt.sign(payload, SECRET, options);
};

const mailer = nm.createTransport({
  service: "SendGrid",
  auth: {
    user: process.env.SENDGRID_USERNAME,
    pass: process.env.SENDGRID_PASSWORD
  }
});

const client = new GraphQLClient(
  "https://quiztime-hasura.herokuapp.com/v1alpha1/graphql",
  {
    headers: {
      "X-Hasura-Access-Key": process.env.X_HASURA_ACCESS_KEY
    }
  }
);

const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const query = `
query($date: date!, $sent: Boolean!){
  class_quiz(
    where: {
      _and: [
        {due_date: {_eq: $date}},
        {sent: {_eq: $sent}}
      ]
    }
  ){
    id
    quiz_id
    class{
      students{
        id
        email
      }
    }
  }
}
`;

const mutation = `
mutation update_class_quiz($id: Int!, $sent: Boolean!){
  update_class_quiz(
    where: {id: {_eq: $id}},
    _set: {sent: $sent}
  ){
    affected_rows
  }
}
`;

const emailStudents = async () => {
  const data = await client.request(query, { date: getDate(), sent: false });
  //quiz is technically the individual class_quiz entries
  data.class_quiz.forEach(quiz => {
    quiz.class.students.forEach(student => {
      const msg = {
        to: student.email,
        from: "noreply@quiztime.now.sh", //add our email no-reply@something
        subject: "You have a quiz available to take!",
        text: `You have a quiz available, go to https://quiztime.now.sh/student?token=${generateToken(
          student.email,
          quiz.quiz_id,
          student.id
        )} to take it!`
      };
      mailer.sendMail(msg, (err, info) => {
        if (err) {
          console.log("error: ", err);
        }
      });
      client.request(mutation, {id: quiz.id, sent: true});
    });
  });
};

const mailControl = async (req, res) => {
  const js = await json(req);
  switch (js.command) {
    case "start":
      mailTimer = setInterval(emailStudents, 21600000);
      send(res, 200, { message: "Sending emails" });
      break;
    case "stop":
      clearInterval(mailTimer);
      send(res, 200, { message: "Stopped running." });
      break;
    case "sendEmails":
      const ret = await emailStudents();
      send(res, 200, { message: "The day's emails sent out." });
      break;
    case "generateToken":
      const js = await json(req);
      const token = generateToken(js.email, js.quiz_id, js.student_id);
      send(res, 200, token);
      break;
  }
};

module.exports = (req, res) => run(req, res, mailControl);
