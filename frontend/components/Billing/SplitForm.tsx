import React from 'react'
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement, injectStripe } from "react-stripe-elements";

class SplitForm extends React.Component {
  handleBlur = () => {
    console.log('[blur]');
  };
  handleChange = (change) => {
    // console.log('[change]', change);
  };
  handleClick = () => {
    console.log('[click]');
  };
  handleFocus = () => {
    console.log('[focus]');
  };
  handleReady = () => {
    console.log('[ready]');
  };

  createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
          padding,
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
  };

  handleSubmit = async (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      const { token } = await this.props.stripe.createToken();
      token.sub = this.props.loggedUser.sub;
      console.log('\nTOKEN: ', token)
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
    const { handleBlur, handleChange, handleClick, handleFocus, handleReady, createOptions } = this
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          CVC
          <CardCVCElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          Postal code
          <PostalCodeElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}

export default injectStripe(SplitForm)

