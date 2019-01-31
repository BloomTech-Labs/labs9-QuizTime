import {
  LandingBar,
  GreenLine,
  BlueLine,
  LandingText,
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
  InfoSectionWrapper,
  HeaderSection,
  GetStartedBtn
} from "../design-system/primitives";
import { css } from "@emotion/core";
import { authorize } from "../../utils/auth0";
const TopLanding = () => {
  return (
    <div>
      <LandingBar>
        <LandingBarItems onClick={authorize}>Login</LandingBarItems>
        <LandingBarItems onClick={authorize}>Sign Up</LandingBarItems>
      </LandingBar>
      <CallToActionSection>
        <HeaderObj>
          <GreenLine
            css={css`
              width: 100px;
              position: absolute;
              top: 120px;
              left: 250px;
              border-bottom: 10px solid #70e89d;
            `}
          />
          <HeaderInfoText>
            "Quickly assess understanding of content, while giving each student
            a unique, adaptive learning experience.."
          </HeaderInfoText>
          <HeaderSection>
            <HeaderText>QuizTime</HeaderText>
            <HeaderText
              fontSize={5}
              onClick={authorize}
              bg="green.1"
              color="blue.1"
              css={{
                cursor: "pointer"
              }}
            >
              Get Started
            </HeaderText>
          </HeaderSection>
        </HeaderObj>
      </CallToActionSection>
      <HowItWorksSection>
        <InfoSectionWrapper>
          <InfoSection>
            <InfoTextBox
              css={css`
                @media (max-width: 763px) {
                  margin-right: 10px;
                }
                @media (max-width: 500px) {
                  margin-right: 0;
                }
              `}
            />
            <GreenLine
            css={css`
              position: absolute;
              height:850px;
              width:500px;
              top:16px;
              right: -10px;
              border-top: 10px solid #70e89d;

            `}
          />
            <InfoText>
              QuizTime enables teachers to create Quizzes for their students.
            </InfoText>
            <InfoBox
              css={css`
                @media (max-width: 763px) {
                  margin-right: 10px;
                }
                @media (max-width: 500px) {
                  margin-right: 0;
                }
              `}
            />
            <InfoTextBox
              css={css`
                @media (max-width: 763px) {
                  margin-right: 10px;
                }
                @media (max-width: 500px) {
                  margin-right: 0;
                }
              `}
            />
          </InfoSection>
          <InfoSectionRight>
            <InfoBoxTwo />
            <InfoTextBox
              css={css`
                @media (max-width: 763px) {
                  margin-left: 0px;
                  margin-right: 0;
                }
              `}
            />
             <GreenLine
            css={css`
              position: absolute;
              width:200px;
              height:520px;
              border-bottom:10px solid #70e89d; 
              top:16px;
              right: 469px;
            `}
          />
            <InfoTextTwo>
              The teacher can distribute that quiz to all students with one
              click.
            </InfoTextTwo>
            <InfoBoxThree
              css={css`
                @media (max-width: 763px) {
                  margin-left: 0px;
                  margin-right: 0;
                }
              `}
            />
            <InfoTextThree>
              With QuizTime teachers are able to their student performances.
            </InfoTextThree>
          </InfoSectionRight>
        </InfoSectionWrapper>
      </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
