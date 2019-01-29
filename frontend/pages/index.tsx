import { Container, BoldText, Button, FullScreenContainer } from "../components/design-system";
import { authorize } from "../utils/auth0";
import unsecurePage from '../hocs/unsecurePage';

const Index = () => (
  <FullScreenContainer>
    <BoldText>Hello, Welcome to QuizTime! Login Below</BoldText>
    <Button onClick={authorize}>Login</Button>
  </FullScreenContainer>
);

export default unsecurePage(Index);
