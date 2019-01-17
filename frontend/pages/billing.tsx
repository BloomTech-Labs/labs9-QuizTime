import styled from "@emotion/styled";
import TakeMoney from '../components/Billing/TakeMoney'
import securePage from '../hocs/securePage'

const BillingHolder = styled.div`
	display: flex;
  flex-direction: column;
  width: 100%
`;

const Billing = (props) => (
  <BillingHolder>
    <div>You should only see this if signed in: {props.loggedUser.email}</div>
    <TakeMoney {...props} />
  </BillingHolder>
);

export default securePage(Billing)