import styled from "@emotion/styled";
import TakeMoney from '../components/Billing/TakeMoney'
import securePage from '../hocs/securePage'
import Layout from "../components/Layout"; 
const BillingHolder = styled.div`
	display: flex;
  flex-direction: column;
  width: 100%
`;

const Billing = (props) => (
<Layout>
  <BillingHolder>
    <div>You should only see this if signed in: {props.loggedUser.email}</div>
    <TakeMoney {...props} />
  </BillingHolder>
</Layout>
);

export default securePage(Billing)