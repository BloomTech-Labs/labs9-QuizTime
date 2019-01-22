import React, { Component } from "react";
import { Text, Box } from "@rebass/emotion";

class Emailer extends Component {
  state = {
    email: {
      recipient: "",
      sender: "",
      subject: "",
      text: ""
    },
    emailSent: false,
    emailSuccesful: false
  };

  sendEmail = async () => {
    const { email } = this.state;
    console.log("sending:", email);
    try {
      const res = await fetch(`/api/send-email`, {
        method: "POST",
        body: JSON.stringify(email),
        headers: { "Content-Type": "application/json" }
      });
      const message = await res.json();
      if (message) {
        console.log(message);
        this.setState(s => ({ ...s, emailSent: true, emailSuccessful: true }));
      }
    } catch (e) {
      console.log("uh oh:", e);
    }
  };

  render() {
    const { email, emailSent, emailSuccessful } = this.state;
    const spacer = {
      margin: 10
    };
    const textArea = {
      borderRadius: 4
    };
    return (
      <div className="App">
        <div style={{ marginTop: 10 }}>
          <h2> Send Email </h2>
          <label> Recipient </label>
          <br />
          <input
            value={email.recipient}
            onChange={e =>
              this.setState({ email: { ...email, recipient: e.target.value } })
            }
          />
          <div style={spacer} />
          <label> Sender </label>
          <br />
          <input
            value={email.sender}
            onChange={e =>
              this.setState({ email: { ...email, sender: e.target.value } })
            }
          />
          <div style={spacer} />
          <label> Subject </label>
          <br />
          <input
            value={email.subject}
            onChange={e =>
              this.setState({ email: { ...email, subject: e.target.value } })
            }
          />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea
            rows={3}
            value={email.text}
            style={textArea}
            onChange={e =>
              this.setState({ email: { ...email, text: e.target.value } })
            }
          />
          <div style={spacer} />
          <button onClick={this.sendEmail}> Send Email </button>
        </div>
        {emailSent && emailSuccessful && (
          <Text mt={2} color="green1" fontFamily="sans">
            SUCCESS
          </Text>
        )}
        {emailSent && !emailSuccessful && (
          <Text mt={2} color="red1" fontFamily="sans">
            FAILURE
          </Text>
        )}
      </div>
    );
  }
}

export default Emailer;
