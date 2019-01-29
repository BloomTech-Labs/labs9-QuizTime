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
  InfoSectionImage,
  InfoSectionRight,
  InfoTextBox,
  InfoTextBoxRight,
  BgBlock
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
              <InfoBox />
              <InfoTextBox />
            </InfoSection>
            <InfoSectionRight>
            <InfoBox />
              <InfoTextBoxRight />
            <InfoBox />
            </InfoSectionRight>
      </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
