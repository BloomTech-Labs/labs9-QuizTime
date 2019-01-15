import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class TakeMoney extends React.Component {
  onToken = async (token) => {
    let response = await fetch('http://localhost:58404/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    })
    console.log('response',response)
  };


  // ...

  render() {
    return (
      <StripeCheckout
        name="QuizTime" // the pop-in header title
        description="$10 for 10 credits" // the pop-in header subtitle
        token={this.onToken}
        amount={1000} // cents
        currency="USD"
        stripeKey="pk_test_rIuPZzF97RGSr9Wcdnn8kkD8"
      />
    )
  }
}

export default TakeMoney
