import {Box, Flex} from '@rebass/emotion';
import { Text, BoxHolder, Button } from "../components/design-system";
import Layout from "../components/Layout";
import securePage from '../hocs/securePage'


const Home = ({ loggedUser }) => {
  return (
    <Layout>
      <Flex
        flexDirection="column"
        justifyContents="space-around"
        alignItems="flex-start"
      >
      <Box m={3}>
      <Text m={3} fontSize={4}>{`Hello ${loggedUser.given_name} ${loggedUser.family_name}`}</Text>
      </Box>
      </Flex>
    </Layout>
  );
};

export default securePage(Home);
