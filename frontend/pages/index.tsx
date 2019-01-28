import { Container, BoldText, Button, FullScreenContainer } from "../components/design-system";
import { authorize } from "../utils/auth0";
import CTA from '../components/LandingPage/CTA';
import HowItWorks from '../components/LandingPage/HowItWorks';
import Testimonials from '../components/LandingPage/Testimonials';
import GetStarted from '../components/LandingPage/GetStarted';
import Footer from '../components/LandingPage/Footer';

const Index = () => (
  <FullScreenContainer>
    <BoldText p={3}>Hello, Welcome to QuizTime! Login Below</BoldText>
    {/* header */}
    {/* CTA */}
    <Button onClick={authorize}>Login</Button>
    {/* how it works */}
    {/* testimonials */}
    {/* get started */}
    <GetStarted />
    {/* footer */}
  </FullScreenContainer>
);

export default Index;
