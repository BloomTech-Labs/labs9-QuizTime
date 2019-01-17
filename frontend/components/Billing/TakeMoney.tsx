import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class TakeMoney extends React.Component {
  onToken = async (token) => {
    //TODO: Change fetch to pull from deployed micro service
    //* APPENDS auth_email to token to identify logged in user on backend
    //* TEMPORARY until teacher table repopulated with GOOGLE_ID
    token.auth_email = this.props.loggedUser.email;
    console.log('\n token:', token);
    let response = await fetch('http://localhost:49249/api/stripe', {
      method: 'POST',
      body: JSON.stringify(token),
    });
    let data = await response.json();
    console.log('data: ', data);
  };

  render() {
    console.log('\n props:', this.props);

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
    );
  }
}

export default TakeMoney;