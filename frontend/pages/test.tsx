import {
  Text,
  BoldText,
  UpperCase,
  Container,
} from "../components/design-system";

import Layout from "../components/Layout";
import AddStudent from "../components/forms/AddStudent";
import AddClass from "../components/forms/AddClass";
import AddQuiz from "../components/forms/AddQuiz";

const Test = props => (
  <Layout>
    <Container css={{ maxWidth: "600px" }}>
      <Text>Add a question</Text>
      <Text color="red0" fontSize={5}>
        Hello
      </Text>
      <Text color="blue.0">Blue0</Text>
      <Text color="blue.1">Blue1</Text>
      <BoldText>World</BoldText>
      <UpperCase
        my={2}
        fontSize={3}
        fontWeight={5}
        css={{
          textDecoration: "underline",
          fontStyle: "italic"
        }}
      >
        this should be uppercase
      </UpperCase>
    </Container>
    <AddStudent />
    <AddClass />
    <AddQuiz />
  </Layout>
);

export default Test;
