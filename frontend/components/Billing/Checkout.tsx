import { Elements } from 'react-stripe-elements';
import SplitForm from './SplitForm';

const Checkout = props => {
  return (
    <Elements>
      <SplitForm fontSize='18px' {...props} />
    </Elements>
  );
};

export default Checkout;
