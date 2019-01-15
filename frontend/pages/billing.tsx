import styled from "@emotion/styled";
import TakeMoney from '../components/Billing/TakeMoney'

const BillingHolder = styled.div`
	display: flex;
  width: 100%
`;

const Billing = () => (
  <BillingHolder>
    <TakeMoney />
  </BillingHolder>
);

export default Billing