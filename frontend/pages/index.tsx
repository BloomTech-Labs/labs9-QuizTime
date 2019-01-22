import { Container, BoldText, Button, FullScreenContainer } from "../components/design-system";
import { authorize } from "../utils/auth0";

const Index = () => (
  <FullScreenContainer>
    <BoldText>Hello, Welcome to QuizTime! Login Below</BoldText>
    <Button onClick={authorize}>Login</Button>
  </FullScreenContainer>
);

export default Index;
