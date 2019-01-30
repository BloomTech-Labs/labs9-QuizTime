import { Text, BoxHolder, Holder, Button } from "../components/design-system";
import Layout from "../components/Layout";
import securePage from '../hocs/securePage'


const Home = ({ loggedUser }) => {
  return (
    <Layout>
      <Text m={3} fontSize={4}>{`Hello ${loggedUser.given_name} ${loggedUser.family_name}.`}</Text>
        <BoxHolder m={2}>
          <Holder m={3}>
          <Button>Create a Class</Button>
        </Holder>
        <Holder m={3}>
          <Button>Create a Quiz</Button>
        </Holder>
      </BoxHolder>
    </Layout>
  );
};

export default securePage(Home);
