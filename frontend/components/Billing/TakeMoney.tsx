import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class TakeMoney extends React.Component {
  onToken = async (token) => {
    //* Need to append logged in user info to token before .stringify
    //* Need to change fetch to pull from deployed micro service
    let response = await fetch('http://localhost:55436/api/stripe', {
      method: 'POST',
      body: JSON.stringify(token),
    })
    let data = await response.json()
    console.log('data: ', data)
  };

  render() {
    return (
      <>
        <StripeCheckout
          name="QuizTime" //* the pop-up header title
          description="$10 for 10 credits" //* the pop-up header subtitle
          token={this.onToken}
          amount={1000} //* cents
          currency="USD"
          stripeKey="pk_test_rIuPZzF97RGSr9Wcdnn8kkD8" //* need to figure out env variables on nextjs
        />
      </>
    )
  }
}

export default TakeMoney