import { Container, BoldText, Button } from "../components/design-system";
import { authorize } from "../utils/auth0";

const Index = () => (
  <Container>
    <BoldText>Hello, Welcome to QuizTime! Login Below</BoldText>
    <Button onClick={authorize}>Login</Button>
  </Container>
);

export default Index;
