import React from "react";
import StripeCheckout from "react-stripe-checkout";

class TakeMoney extends React.Component {
  //* Front-end sends token to backend micro-service
  onToken = async token => {
    token.sub = this.props.loggedUser.sub;
    console.log('\n token:', token)
    // let response = await fetch("/api/add-credit", {
    let response = await fetch("http://localhost:57216/api/add-credit", {
      method: "POST",
      body: JSON.stringify(token)
    });
    //* Micro-service returns updated teacher record to frontend (id & credits)
    let teacher = await response.json();
    console.log('\n teacher:', teacher)
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
    );
  }
}

export default TakeMoney;
