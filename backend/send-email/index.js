require('dotenv').config()
const { json, send, run } = require("micro");
const sgMail = require('@sendgrid/mail');
const cors = require("micro-cors"); 

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = async(req, res) => {
        //Get Variables from query string in the search bar
        const { recipient, sender, subject, text } = json(req);

        //Sendgrid Data Requirements
        const msg = {
            to: recipient, 
            from: sender,
            subject: subject,
            text: text,
        }
        console.log(msg);
        sgMail.send(msg)
        send(res, 200)
}
module.exports = (req, res) => run(req, res, cors(handler));

