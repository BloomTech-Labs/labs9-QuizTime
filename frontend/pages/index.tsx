import { FullScreenContainer } from "../components/design-system";
import { authorize } from "../utils/auth0";
import TopLanding from "../components/landingPage-top/topLandingPage";
import Testimonials from '../components/LandingPage/Testimonials';

const Index = () => (
  <FullScreenContainer>
    <TopLanding />
    <Testimonials />
  </FullScreenContainer>

);
export default Index;
