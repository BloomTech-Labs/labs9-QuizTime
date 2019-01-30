import {
  LandingBar,
  GreenLine,
  BlueLine,
  LandingBarItems,
  CallToActionSection,
  HeaderObj,
  LrgText,
  HeaderText,
  HeaderInfoText,
  HowItWorksSection,
  InfoBox,
  InfoBoxTwo,
  InfoBoxThree,
  InfoSection,
  InfoSectionRight,
  InfoTextBox,
  InfoText,
  InfoTextTwo,
  InfoTextThree
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
        <GreenLine
          css={{
            position: "absolute",
            right: "550px",
            top: "215px"
          }}
        />
        <HeaderInfoText>
          "Quickly assess understanding of content, while giving each student a
          unique, adaptive learning experience.."
        </HeaderInfoText>
      </CallToActionSection>
      <HowItWorksSection>
        <InfoSection>
          <InfoTextBox />
          <InfoText>
            QuizTime enables teachers to create Quizzes for their students.
          </InfoText>
          <InfoBox />
          <InfoTextBox />
          <InfoTextThree>
            Because of QuizTime’s seamless integration, teachers are able to
            view quick summaries of student performances of their students.
          </InfoTextThree>
        </InfoSection>
        <InfoSectionRight>
          <InfoBoxTwo />
          <InfoTextBox />
          <InfoTextTwo>
            When a quiz has been finalized, the teacher can distribute that quiz
            to all students with one click.
          </InfoTextTwo>
          <InfoBoxThree />
        </InfoSectionRight>
      </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
