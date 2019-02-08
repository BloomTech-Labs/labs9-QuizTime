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
          <HeaderSection>
            <HeaderText>QuizTime</HeaderText>
            <HeaderText
              fontSize={5}
              onClick={authorize}
              bg="green.1"
              color="blue.1"
              mt={4}
              css={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 5px 20px rgba(0,0,0,0.50)"
                }
              }}
            >
              Get Started
            </HeaderText>
          </HeaderSection>
          <HeaderInfoText>
            Web-based software allowing fully customizable quizzes, seamless
            learning management, and easy distribution to students.
          </HeaderInfoText>
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
                visibility: hidden;
                @media (max-width: 1354px) {
                  height: 90%;
                  width: 75%;
                  top: 16px;
                  right: -10px;
                  border-top: 10px solid #70e89d;
                  visibility: visible;
                }
                @media (max-width: 1030px) {
                  visibility: hidden;
                }
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
                  margin-right: 0;
                  margin-left: 0;
                }
              `}
            />
            <GreenLine
              css={css`
                position: absolute;
                visibility: hidden;
                @media (max-width: 1354px) {
                  width: 29%;
                  height: 45%;
                  border-bottom: 10px solid #70e89d;
                  top: 16px;
                  right: 469px;
                  visibility: visible;
                }
                @media (max-width: 1030px) {
                  visibility: hidden;
                }
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
              With QuizTime teachers are able to view their student performance.
            </InfoTextThree>
          </InfoSectionRight>
        </InfoSectionWrapper>
      </HowItWorksSection>
    </div>
  );
};
export default TopLanding;
