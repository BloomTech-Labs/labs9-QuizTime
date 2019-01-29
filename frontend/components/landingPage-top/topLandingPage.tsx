import {
  LandingBar,
  LandingBarItems,
  CallToActionSection,
  HeaderObj,
  LrgText,
  HeaderText,
  HeaderInfoText,
  HowItWorksSection,
  InfoBox,
  InfoSection,
  InfoSectionMid,
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
          <HeaderInfoText>Quiz creating made simple</HeaderInfoText>
    </CallToActionSection>
    <HowItWorksSection>
        <InfoSection>
        <InfoBox />
        </InfoSection>
        <InfoSectionMid>
        <InfoBox />
        </InfoSectionMid>
        <InfoSection>
        <InfoBox />
        </InfoSection>
    </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
