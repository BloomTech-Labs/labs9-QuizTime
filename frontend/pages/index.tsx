import { FullScreenContainer } from "../components/design-system";
import { authorize } from "../utils/auth0";
import TopLanding from "../components/landingPage-top/topLandingPage";
import Testimonials from '../components/LandingPage/Testimonials';
import GetStarted from '../components/LandingPage/GetStarted';
import Footer from '../components/LandingPage/Footer';

const Index = () => (
  <FullScreenContainer>
    <TopLanding />
    <Testimonials />
    <GetStarted />
    <Footer />
  </FullScreenContainer>

);
export default Index;
