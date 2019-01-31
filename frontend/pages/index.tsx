import { FullScreenContainer } from "../components/design-system";
import TopLanding from "../components/landingPage-top/topLandingPage";
import Testimonials from '../components/LandingPage/Testimonials';
import GetStarted from '../components/LandingPage/GetStarted';
import Footer from '../components/LandingPage/Footer';
import Meta from "../components/Meta";
import unsecurePage from '../hocs/unsecurePage';
import {GreenLine} from "../components/design-system/primitives";
import { css } from '@emotion/core'

const Index = () => (
  <FullScreenContainer>
        <Meta />
    <TopLanding />
    <Testimonials />
    <GetStarted />
    <Footer />
  </FullScreenContainer>
);


export default unsecurePage(Index);
