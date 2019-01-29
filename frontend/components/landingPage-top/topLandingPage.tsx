import {
  LandingBar,
  Line,
  LandingBarItems,
  CallToActionSection,
  HeaderObj,
  HeaderImage,
  LrgText,
  HeaderText,
  HeaderInfoText,
  HowItWorksSection,
  InfoBox,
  InfoSection,
  InfoSectionMid,
  InfoSectionImage,
} from "../design-system/primitives";
import { authorize } from "../../utils/auth0";

const TopLanding = () => {
  return (
    <div>
      <LandingBar>
        <LandingBarItems onClick={authorize}>Login</LandingBarItems>
        <LandingBarItems onClick={authorize}>Sign Up</LandingBarItems>
      </LandingBar>
      <CallToActionSection>
      <HeaderObj />
          <HeaderText>QuizTime</HeaderText>
          <HeaderInfoText>Quiz creating made simple.</HeaderInfoText>
    </CallToActionSection>
    <HowItWorksSection>
        <InfoSection>
        </InfoSection>
        <InfoSectionMid>
        </InfoSectionMid>
        <InfoSection>
        </InfoSection>
    </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
