import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class TakeMoney extends React.Component {
  onToken = async (token) => {
    let response = await fetch('http://localhost:51660/api/stripe', {
      method: 'POST',
      body: JSON.stringify(token),
    })
    console.log('response', response)
  };

  render() {
    console.log('process is:', process.env)
    return (
      <>
        <div>Hello {process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}</div>
        <StripeCheckout
          name="QuizTime" // the pop-in header title
          description="$10 for 10 credits" // the pop-in header subtitle
          token={this.onToken}
          amount={1000} // cents
          currency="usd"
          stripeKey="pk_test_rIuPZzF97RGSr9Wcdnn8kkD8" //* need to figure out env variables on nextjs
        />
      </>
    )
  }
}

export default TakeMoney
