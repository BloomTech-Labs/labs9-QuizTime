// please see the github companion to Stephen Grider's Full Stack React Course
// Linked here:  https://github.com/StephenGrider/FullstackReactCode/blob/master/server/services/Mailer.js

// the Mailer class is what we will use to send emails to students, this module will need to be imported to
// the location where will will need to send emails to students, most likely in the create quiz form and perhaps
// in the class view where we see quizzes associated with each class. 

//Usage:
// import the Mailer class where needed with const Mailer = require (../..)
// const mailer = new Mailer(object with subject and recipients, html to use in the body of the email);

//$ yarn add sendgrid to import the sendgrid library
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

// ***** uncomment below when ready to implement
//const keys = require(<file path to keys>);


class Mailer extends helper.Mail {
    constructor ({subject, recipients}, content) {
        super();

// ***** uncomment below when ready to implement
        //this.sgApi = sendgrid(keys.SEND_GRID_API_KEY);

        //set a from email with no-reply
        this.from_email = new helper.Email('no-reply@quiztime.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        //requires us to build a helper function to destructure/format addresses    
        this.recipients = this.formatAddresses(recipients);

        //built into sendgrid - registers the body that we want use in the mailer
        this.addContent(this.body);
        //defined below - enables sendgrid to scan the email and replace every link with one of their own
        this.addClickTracking();
        //defined below - take and process the list of recipients (which have been formatted to be an array of helper objects)
        this.addRecipients();
    }

    //Helper functions:

// ******** need collaboration with team on this since address formatting will be specific to our data
    formatAddresses(recipients) {
        //need to extract only the email from each recipient and then return it
        //this essentially turns each recipient into a helper.Email objects
        return recipients.map(({ email }) => {
            // returns a helper email object
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
    
        this.recipients.forEach(recipient => {
          personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
      }
    
      // this function communicates the contents of the mailer to sendgrid
      async send() {
        const request = this.sgApi.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: this.toJSON()
        });
    
        const response = await this.sgApi.API(request);
        return response;
      }
    }
    
    module.exports = Mailer;


