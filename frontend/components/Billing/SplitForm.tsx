import React from 'react'
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement, injectStripe } from "react-stripe-elements";
import { BillingText, Button, BoldText } from '../design-system'

class SplitForm extends React.Component {

  state = { error: null }

  handleReady = (el) => {
    el.focus();
  };
  handleChange = (el) => {
    if (el.error) {
      console.log(el.error.message)
      this.setState({ error: el.error.message })
    }
  }

  createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          fontWeight: 500,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
          padding,
        },
        invalid: {
          color: 'red',
        },
        complete: {
          color: 'green'
        }
      },
    };
  };

  handleSubmit = async (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      const { token } = await this.props.stripe.createToken();
      if (this.props.loggedUser) {
        token.sub = this.props.loggedUser.sub;
      }
      console.log(token)

      // let response = await fetch("/api/add-credit", {
      let response = await fetch("http://localhost:57216/api/add-credit", {
        method: "POST",
        body: JSON.stringify(token),
      });

      //* Micro-service returns updated teacher record to frontend (id & credits)
      let teacher = await response.json();
      console.log(teacher)
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    const { handleChange, handleReady, handleSubmit, createOptions } = this
    return (
      <form onSubmit={handleSubmit}>
        <BillingText>
          Card Number
          <CardNumberElement
            onReady={handleReady}
            onChange={handleChange}
            {...createOptions(this.props.fontSize)}

          />
        </BillingText>
        <BillingText>
          Expiration Date
          <CardExpiryElement
            onChange={handleChange}
            {...createOptions(this.props.fontSize)}

          />
        </BillingText>
        <BillingText>
          CVC
          <CardCVCElement
            onChange={handleChange}
            {...createOptions(this.props.fontSize)}

          />
        </BillingText>
        <BillingText>
          Postal Code
          <PostalCodeElement
            onChange={handleChange}
            {...createOptions(this.props.fontSize)}
          />
        </BillingText >
        <Button m={3}>Pay $10 for 10 Credits</Button>
        <BoldText color='red' m={3}>
          {this.state.error}
        </BoldText>
      </form>
    );
  }
}

export default injectStripe(SplitForm)

