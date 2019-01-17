import micro, { json, send, sendError } from "micro";
const sgMail = require('@sendgrid/mail');

const emailed = require('../emailed')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = emailed(async(req, res) => {
        //Get Variables from query string in the search bar
        const { recipient, sender, topic, text } = req.query; 

        //Sendgrid Data Requirements
        const msg = {
            to: recipient, 
            from: sender,
            subject: topic,
            text: text,
        }
        sgMail.send(msg)
        send(res, 200)
})
