const { json, send, run } = require("micro");
const nm = require("nodemailer");

const client = nm.createTransport({
  service: "SendGrid",
  auth: {
    user: process.env.SENDGRID_USERNAME,
    pass: process.env.SENDGRID_PASSWORD
  }
});

const handler = async (req, res) => {
  //Get Variables from query string in the search bar
  const { recipient, sender, subject, text } = await json(req);

  //Sendgrid Data Requirements
  const msg = {
    to: recipient,
    from: sender,
    subject: subject,
    text: text
  };
  console.log(msg);
  client.sendMail(msg, (err, info) => {
    if (err) {
      console.log("uh oh " + err);
    }
    send(res, 200, info);
  });
};
module.exports = (req, res) => run(req, res, handler);
