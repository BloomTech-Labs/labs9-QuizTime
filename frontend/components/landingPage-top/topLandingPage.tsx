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
  InfoBoxTwo,
  InfoBoxThree,
  InfoSection,
  InfoSectionImage,
  InfoSectionRight,
  InfoTextBox,
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
        <HeaderInfoText>
          "Quickly assess understanding of content,
          while giving each student a unique, adaptive learning experience.."
          </HeaderInfoText>
      </CallToActionSection>
      <HowItWorksSection>
          <InfoSection>
            <InfoTextBox />
              <InfoBox />
              <InfoTextBox />
            </InfoSection>
            <InfoSectionRight>
            <InfoBoxTwo />
              <InfoTextBox />
            <InfoBoxThree />
            </InfoSectionRight>
      </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
