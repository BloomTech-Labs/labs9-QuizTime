import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  injectStripe,
} from 'react-stripe-elements';
import { Flex, Box } from '@rebass/emotion';
import { BillingText, ButtonLink, BoldText, UpperCase } from '../design-system';

class SplitForm extends React.Component {
  state = {
    error: null,
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
    postalCode: false,
    teacher: null,
  };

  handleReady = el => {
    el.focus();
  };

  handleChange = el => {
    this.setState({
      [el.elementType]: el.complete,
    });
    if (el.error) {
      this.setState({ error: el.error.message });
    } else {
      this.setState({ error: null });
    }
  };

  createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          fontWeight: 600,
          color: '#101440',
          letterSpacing: '0.06em',
          fontFamily: 'Menlo, monospace',
          fontSmoothing: 'antialiased',
          '::placeholder': {
            color: '#a9a9a9',
          },
          padding,
        },
        invalid: {
          color: 'red',
        },
        complete: {
          color: '#006400',
        },
      },
    };
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      const { token } = await this.props.stripe.createToken();
      if (this.props.loggedUser) {
        token.sub = this.props.loggedUser.sub;
      }
      // let response = await fetch('/api/add-credit', {
      let response = await fetch('https://quiztime.now.sh/add-credit', {
        method: 'POST',
        body: JSON.stringify(token),
      });

      //* Micro-service returns updated teacher record to frontend (id & credits)
      let teacher = await response.json();
      teacher = teacher.update_teacher.returning[0];
      this.setState({ teacher });
    } else {
    }
  };

  render() {
    const { handleChange, handleReady, handleSubmit, createOptions } = this;
    const { cardNumber, cardExpiry, cardCvc, postalCode, teacher } = this.state;
    const styledCardNumber = {
      width: '100%',
      fontSize: '16px',
      height: '3em',
      lineHeight: '1.5',
      padding: '.625em',
      padding: '10px 20px 11px',
      borderRadius: '3px',
      boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, .1)',
    };

    const styledPostal = {
      maxWidth: '100%',
      padding: '10px 10px 11px 20px',
      borderRadius: '3px',
      boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, .1)',
    };

    const styledCVC = {
      maxWidth: '80%',
      padding: '10px 10px 11px 20px',
      borderRadius: '3px',
      boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, .1)',
    };

    let ready2Submit = cardNumber && cardExpiry && cardCvc && postalCode;
    return (
      <>
        <form
          onSubmit={handleSubmit}
          style={{
            margin: '50px 10%',
            maxWidth: '350px',
            padding: 10,
            boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          }}
        >
          <BoldText fontSize={[3, 4, 28]} m={3} ml={1} color={'blue.1'}>
            Add 500 Credits
          </BoldText>
          <BillingText mb={2} fontSize={[1, 2, 3]}>
            Card Number
          </BillingText>
          <CardNumberElement
            css={styledCardNumber}
            onReady={handleReady}
            onChange={handleChange}
            {...createOptions(this.props.fontSize)}
          />
          <BillingText mb={2} fontSize={[1, 2, 3]}>
            Expiration Date
          </BillingText>
          <CardExpiryElement
            css={styledCardNumber}
            onChange={handleChange}
            {...createOptions(this.props.fontSize)}
          />
          <Flex justifyContent='space-between'>
            <div style={{ width: '50%' }}>
              <BillingText mb={2} fontSize={[1, 2, 3]}>
                CVC
              </BillingText>
              <CardCVCElement
                onChange={handleChange}
                css={styledCVC}
                {...createOptions(this.props.fontSize)}
              />
            </div>
            <div style={{ width: '50%' }}>
              <BillingText mb={2} fontSize={[1, 2, 3]}>
                Zip Code
              </BillingText>
              <PostalCodeElement
                onChange={handleChange}
                css={styledPostal}
                {...createOptions(this.props.fontSize)}
              />
            </div>
          </Flex>
          <Box>
            <Flex justifyContent='center'>
              <ButtonLink
                mt={3}
                disabled={!ready2Submit}
                css={{
                  cursor: !ready2Submit ? 'not-allowed' : null,
                  width: '80%',
                  padding: '0px 20px',
                  marginTop: '35px',
                  lineHeight: 1.5,
                  height: '60px',
                }}
              >
                $1.00
              </ButtonLink>
            </Flex>
          </Box>
          <Box css={{ height: 30, textAlign: 'center' }}>
            <UpperCase
              color='red'
              mt={3}
              fontSize={12}
              fontWeight={4}
              lineHeight={1.5}
            >
              {this.state.error || ' '}
            </UpperCase>
            <UpperCase
              color='green'
              mt={3}
              fontSize={12}
              fontWeight={4}
              lineHeight={1.5}
            >
              {this.state.teacher && `Successfully purchased credits!` }
              </UpperCase>
          </Box>
        </form>
      </>
    );
  }
}

export default injectStripe(SplitForm);
