import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements'
import Checkout from '../components/Billing/Checkout'
import securePage from '../hocs/securePage'
import Layout from "../components/Layout"; 


class Stripe extends Component {
  constructor(props) {
    super(props)
    this.state = { stripe: null }
  }
  componentDidMount() {
    //* Create Stripe instance in componentDidMount
    //* (componentDidMount only fires in browser/DOM environment)
    this.setState({ stripe: window.Stripe('pk_test_rIuPZzF97RGSr9Wcdnn8kkD8') });
  }
  render() {
    const { props } = this
    return (
	<Layout>
      <StripeProvider stripe={this.state.stripe}>
        <Checkout {...props} />
      </StripeProvider>
	</Layout>
    )
  }
}

export default securePage(Stripe)
