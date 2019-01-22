import React, { Component } from 'react'
import { Elements } from 'react-stripe-elements'
import SplitForm from './SplitForm'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementFontSize: '16px'
    };

  }

  render() {
    const { elementFontSize } = this.state;
    const { props } = this
    return (
      <div className="Checkout">
        <Elements>
          <SplitForm fontSize={elementFontSize} {...props} />
        </Elements>
      </div>
    );
  }
}

export default Checkout