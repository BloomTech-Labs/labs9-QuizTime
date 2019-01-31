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
  InfoTextThree,
  InfoSectionWrapper
} from "../design-system/primitives";
import { css } from '@emotion/core'
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
          "Quickly assess understanding of content, while giving each student a
          unique, adaptive learning experience.."
        </HeaderInfoText>
      </CallToActionSection>
      <HowItWorksSection>
        <InfoSectionWrapper>
        <InfoSection>
          <InfoTextBox
          css={css`
            @media(max-width:763px){
              margin-right:10px;
            }
            @media(max-width:500px){
            margin-right:0;
          }
          `}
          />
          <InfoText>
            QuizTime enables teachers to create Quizzes for their students.
          </InfoText>
          <InfoBox
          css={css`
          @media(max-width:763px){
            margin-right:10px;
          }
          @media(max-width:500px){
            margin-right:0;
          }
        `} 
          />
          <InfoTextBox
          css={css`
          @media(max-width:763px){
            margin-right:10px;
          }
          @media(max-width:500px){
            margin-right:0;
          }
        `}
        />
        </InfoSection>
        <InfoSectionRight>
          <InfoBoxTwo/>
          <InfoTextBox 
           css={css`
           @media(max-width:763px){
             margin-left:0px;
             margin-right:0;
           }
         `}
          />
          <InfoTextTwo>
            When a quiz has been finalized, the teacher can distribute that quiz
            to all students with one click.
          </InfoTextTwo>
          <InfoBoxThree
          css={css`
          @media(max-width:763px){
            margin-left:0px;
            margin-right:0;
          }
        `}
          />
          <InfoTextThree>
            With QuizTime teachers are able to
            view quick summaries of student performances of their students.
          </InfoTextThree>
        </InfoSectionRight>
        </InfoSectionWrapper>
      </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
