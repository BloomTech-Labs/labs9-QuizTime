import { FullScreenContainer } from "../components/design-system";
import TopLanding from "../components/landingPage-top/topLandingPage";
import Testimonials from '../components/LandingPage/Testimonials';
import GetStarted from '../components/LandingPage/GetStarted';
import Footer from '../components/LandingPage/Footer';
import Meta from "../components/Meta";
import unsecurePage from '../hocs/unsecurePage';

const Index = () => (
  <FullScreenContainer>
        <Meta/>
    <TopLanding />
    <Testimonials />
    <GetStarted />
    <Footer />
  </FullScreenContainer>
);


export default unsecurePage(Index);
