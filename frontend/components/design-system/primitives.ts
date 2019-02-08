import {
  Box as B,
  Text as T,
  Flex as F,
  Button as Btn,
  Image as I
} from "@rebass/emotion";

import {
  space,
  width,
  borders,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  color
} from "styled-system";
import styled from "@emotion/styled";
import { isAbsolute } from "path";
import { css } from "@emotion/core";
/*
export const Text = system{
    is: "p",
    fontSize: "14px",
    fontFamily: "sans",
    fontWeight: "300"
*/

export const LandingText = props => (
  <T fontSize={3} fontWeight={1} fontFamily="sans" color="black" {...props} />
);
/* NAVIGATION COMPONENTS*/
export const NavBarHolder = props => (
  <F
    justifyContent="flex-end"
    alignItems="center"
    p={2}
    bg={["white"]}
    css={{ borderBottom: "2px solid #323fcb" }}
    {...props}
  />
);

export const GreenLine = props => (
  <B
    css={{
      borderLeft: "10px solid #70e89d",
      height: "100px"
    }}
    {...props}
  />
);

export const BlueLine = props => (
  <B
    width="100px"
    css={{
      borderTop: "5px solid #323fcb"
    }}
    {...props}
  />
);

export const LandingBar = props => (
  <F
    width={[1]}
    justifyContent="flex-end"
    alignItems="center"
    bg="blue.1"
    css={{
      height: "50px"
    }}
    {...props}
  />
);
export const LandingBarItems = props => (
  <T
    StyledText
    p={3}
    fontFamily="sans"
    color="white"
    css={{
      cursor: "pointer",
      transition: "color .5s ease-out",
      "&:hover": {
        color: "#70e89d"
      }
    }}
    {...props}
  />
);

export const GetStartedBtn = props => (
  <F
    justifyContent="center"
    alignItems="center"
    width="150px"
    bg="green.0"
    color="blue.1"
    css={{
      height: "25px",
      border: "1px solid white"
    }}
  />
);
export const HeaderImage = props => (
  <I
    width="500px"
    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    css={{
      position: "absolute",
      left: "50px",
      filter: "grayscale(100%)"
    }}
    {...props}
  />
);
export const CallToActionSection = props => (
  <F
    width={[1]}
    css={{
      height: "auto"
    }}
    {...props}
  />
);
export const HeaderObj = props => (
  <F
    justifyContent="center"
    width="100vw"
    bg="blue.1"
    css={{
      height: "700px",
      clipPath: "polygon(100% 0, 100% 38%, 36% 61%, 0 38%, 0 0)",
      position: "relative"
    }}
    {...props}
  />
);
export const HeaderSection = props => (
  <F
    width="auto"
    flexDirection="column"
    alignItems="center"
    m={3}
    css={css`
      height: 250px;
      position: absolute;
      left: 330px;
      @media (max-width: 763px) {
        left: 100px;
      }
      @media (max-width: 500px) {
        left: 20px;
      }
    `}
    {...props}
  />
);
export const HeaderText = props => (
  <T
    p={3}
    fontSize={7}
    fontWeight={0}
    fontFamily="sans"
    color="white"
    {...props}
  />
);
export const HeaderInfoText = props => (
  <T
    width={[1, 1, 1 / 3]}
    p={3}
    fontSize={4}
    fontWeight={1}
    fontFamily="sans"
    color="white"
    m={5}
    css={css`
      line-height: 1.5;
      position: relative;
      left: 220px;
      @media (max-width: 1090px) {
        visibility: hidden;
      }
    `}
    {...props}
  />
);
export const LrgText = props => (
  <T
    fontSize={700}
    fontFamily="sans"
    color="green.1"
    css={{
      position: "absolute",
      top: "10px",
      opacity: ".5"
    }}
    {...props}
  />
);
export const HowItWorksSection = props => (
  <F
    flexDirection="row"
    width={[1]}
    mt={1}
    mb={1}
    css={{
      height: "auto"
    }}
    {...props}
  />
);
export const InfoSectionImage = props => (
  <I
    width={[1 / 4]}
    src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    css={{
      height: "350px"
    }}
  />
);
export const TestimonialStudentImage = props => (
  <I
    src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?cs=srgb&dl=beautiful-blur-casual-935756.jpg&fm=jpg"
    css={{
      width: "500px",
      filter: "grayscale(100%)"
    }}
  />
);
export const TestimonialTeacherImage = props => (
  <I
    src="https://images.pexels.com/photos/1350615/pexels-photo-1350615.jpeg?cs=srgb&dl=adult-blank-board-1350615.jpg&fm=jpg"
    css={{
      width: "500px",
      filter: "grayscale(100%)"
    }}
  />
);

export const InfoSectionWrapper = props => (
  <F
    width={[1]}
    flexDirection="row"
    css={css`
      @media (max-width: 500px) {
        flex-direction: column;
      }
    `}
    {...props}
  />
);
export const InfoSection = props => (
  <F
    width={[1, 1, 1 / 2]}
    justifyContent="center"
    flexDirection="column"
    alignItems="flex-end"
    mt={3}
    mb={3}
    css={css`
      height: auto;
      position: relative;
      @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `}
    {...props}
  />
);

export const FlexColumns = props => (
  <F
    justifyContent="center"
    flexDirection="row"
    alignItems="top"
    flexWrap="wrap"
    mt={3}
    mb={3}
    css={{
      height: "auto"
    }}
    {...props}
  />
);

export const InfoSectionRight = props => (
  <F
    width={[1, 1, 1 / 2]}
    justifyContent="center"
    flexDirection="column"
    alignItems="flex-start"
    mt={3}
    mb={3}
    css={css`
      height: auto;
      position: relative;
      @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `}
    {...props}
  />
);

export const InfoBox = props => (
  <I
    width={[1, 1, 500]}
    src="https://images.unsplash.com/photo-1501290836517-b22a21c522a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80"
    m={3}
    css={css`
      filter: grayscale(100%);
      @media (max-width: 1030px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `}
    {...props}
  />
);

export const InfoBoxTwo = props => (
  <I
    width={[1, 1, 500]}
    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    m={3}
    css={css`
      filter: grayscale(100%);
      @media (max-width: 1030px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `}
    {...props}
  />
);

export const InfoBoxThree = props => (
  <I
    width={[1, 1, 500]}
    src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    m={3}
    css={css`
      filter: grayscale(100%);
      @media (max-width: 1030px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `}
    {...props}
  />
);

export const InfoTextBox = props => (
  <B
    width={[1, 5 / 8]}
    bg="blue.4"
    m={3}
    css={css`
      height: 250px;
      opacity: 0.1;
      @media (max-width: 500px) {
        margin-top: 0px;
        margin-bottom: 0px;
        height: 250px;
      }
    `}
    {...props}
  />
);

export const InfoText = props => (
  <T
    width={[5 / 6, 3 / 4, 3 / 5]}
    fontFamily="sans"
    fontSize={[5]}
    fontWeight={2}
    color="#2d2d2d"
    css={css`
      position: absolute;
      top: 50px;
      right: 60px;
      line-height: 1.5;
      @media (max-width: 900px) {
        top: 100px;
        right: 10px;
      }
      @media (max-width: 767px) {
        font-size: 25px;
        top: 80px;
        right: 20px;
      }
      @media (max-width: 500px) {
        top: 80px;
        left: 30px;
      }
    `}
    {...props}
  />
);

export const InfoTextTwo = props => (
  <T
    width={[5 / 6, 3 / 4, 3 / 5]}
    fontFamily="sans"
    fontSize={[5]}
    fontWeight={2}
    color="#2d2d2d"
    css={css`
      position: absolute;
      top: 430px;
      right: 40px;
      line-height: 1.5;
      @media (max-width: 900px) {
        top: 400px;
        right: 10px;
      }
      @media (max-width: 767px) {
        font-size: 25px;
        right: 20px;
        top: 320px;
      }
      @media (max-width: 500px) {
        top: -200px;
        left: 30px;
      }
    `}
    {...props}
  />
);

export const InfoTextThree = props => (
  <T
    width={[5 / 6, 3 / 4, 3 / 5]}
    fontFamily="sans"
    fontSize={[5]}
    fontWeight={2}
    color="#2d2d2d"
    css={css`
      position: absolute;
      bottom: 50px;
      left: -550px;
      line-height: 1.5;
      @media (max-width: 900px) {
        bottom: 40px;
        left: -300px;
      }
      @media (max-width: 767px) {
        font-size: 25px;
        bottom: 80px;
        left: -270px;
      }
      @media (max-width: 560px) {
        font-size: 25px;
        bottom: 80px;
        left: -240px;
      }
      @media (max-width: 500px) {
        bottom: 330px;
        left: 40px;
      }
    `}
    {...props}
  />
);

//flex-wrap at specified breakpoint
export const FlexChange = props => (
  <F 
  css={css`
  @media (max-width: 639px){
    flex-wrap: wrap;
  }
`}
  {...props}
  />
)

//center at a specfied breakpoint
export const FlexCenter = props => (
  <F 
  css={css`
  @media (max-width: 639px){
    justifyContent: center;
    alignItems: center;
  }
`}
  {...props}
  />
)

export const SideBarHolder = props => (
  <F
    width={[0, 1 / 3, 1 / 5]}
    py={[3]}
    bg="blue.4"
    flexDirection="column"
    justifyContent="flex-start"
    fontSize={4}
    css={{
      minHeight: "100vh"
    }}
    {...props}
  />
);
const StyledText = styled.a`
  ${fontSize}
`;

export const StudentViewNav = props => (
  <F justifyContent="flex-end" {...props} />
);

export const BoxText = props => (
  <T
    StyledText
    p={1}
    fontFamily="sans"
    css={{
      cursor: "pointer"
    }}
    {...props}
  />
);

/* CONTAINERS */

export const Container = props => (
  <B mx="auto" css={{ maxWidth: "800px" }} {...props} />
);

export const FullScreenContainer = props => (
  <F
    justifyContent="center"
    flexDirection="column"
    bg="#f2f2f2"
    width="100%"
    {...props}
    css={css`
      @media (max-width: 831px) {
        overflow-x: hidden;
      }
    `}
  />
);

export const BoxHolder = props => (
  <F
    width="200px"
    m={3}
    justifyContent="space-between"
    flexDirection="column"
    bg="white"
    css={{
      height: "200px",
      borderBottom: "10px solid red.1",
      borderRadius: "4px",
      boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
    }}
    {...props}
  />
);

export const StudentElement = props => (
  <F
    my={3}
    width={[1]}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    p={2}
    bg="white"
    {...props}
  />
);

export const SectionContainer = props => (
  <F
    flexWrap="wrap"
    justifyContent="center"
    width={[1]}
    m={2}
    css={{
      height: "auto"
    }}
    {...props}
  />
);

export const StudentHolder = props => (
  <F
    m={2}
    width={[1, 1, 1 / 2]}
    flexDirection="column"
    justifyContent="flexStart"
    alignItems="center"
    css={{
      height: "300px",
      overflowY: "scroll",
      border: "1px solid black"
    }}
    {...props}
  />
);

export const QuizHolder = props => (
  <F
    m={2}
    width="80%"
    flexWrap="wrap"
    flexDirection="row"
    css={{
      height: "auto",
      border: "1px solid black"
    }}
    {...props}
  />
);

export const QuizBox = props => (
  <F
    m={2}
    width={[1, 1, 1 / 6]}
    flexDirection="column"
    alignItems="center"
    css={{
      height: "300px",
      border: "1px solid black"
    }}
    {...props}
  />
);
export const QuizBar = props => (
  <F
    width={[1]}
    p={1}
    mt={1}
    mb={1}
    justifyContent="space-between"
    alignItems="center"
    flexDirection="row"
    bg="white"
    css={{
      height: "auto",
      borderRadius: "5px"
    }}
    {...props}
  />
);
export const QuizzesAvaliable = props => (
  <F
    m={2}
    width={[1, 1, 1 / 4]}
    flexDirection="row"
    flexWrap="wrap"
    css={{
      border: "1px solid black",
      height: "300px"
    }}
    {...props}
  />
);
/*SMALLER COMPONENTS*/
export const Emblem = props => (
  <F
    justifyContent="center"
    alignItems="center"
    bg="green.1"
    width={70}
    css={{
      height: "70px",
      clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
    }}
  />
);
/* TYPOGRAPHY */
export const Text = props => <T fontSize={2} fontFamily="sans" {...props} />;

export const BoldText = props => (
  <T fontSize={1} fontFamily="sans" fontWeight={6} {...props} />
);

export const BillingText = props => <BoldText m={3} fontSize={3} {...props} />;

export const HeadText = props => (
  <T
    fontFamily="sans"
    py={3}
    fontWeight={2}
    fontSize={4}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

export const UpperCase = props => (
  <T
    fontSize={1}
    fontFamily="sans"
    fontWeight={1}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

export const Button = props => <Btn variant="primary" {...props} />;

export const ButtonLink = props => (
  <Button css={{ cursor: "pointer" }} {...props} />
);

export const Avatar = props => (
  <F
    justifyContent="center"
    alignItems="center"
    width="30px"
    bg="blue.2"
    m={3}
    color="white"
    fontFamily="sans"
    css={{ height: "30px", borderRadius: "50%" }}
    {...props}
  />
);

/* Forms */
export const StyledForm = styled.form`
  ${display}
  ${space}
  ${width}
  ${borders}
  ${color}
`;

export const StyledInput = styled.input`
  ${space}
  ${width}
  ${borders}
  ${display}
`;

export const StyledTextArea = styled.textarea`
  ${space}
  ${width}
  ${borders}
`;
export const StyledLabel = styled.label`
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
`;
export const Form = props => <StyledForm {...props} />;

export const Input = props => (
  <StyledInput
    fontSize={4}
    border="1px solid #dbdbdb"
    css={{
      fontSize: "16px",
      borderRadius: "3px",
      display: "block",
      height: "3em",
      lineHeight: "1.5",
      padding: ".625em",
      boxShadow: "inset 0 1px 2px rgba(10, 10, 10, .1)",
      "&:active": {
        borderColor: "#323fcb",
        boxShadow: "0 0 0 0.125em rgba(65, 185, 19, .25)"
      }
    }}
    {...props}
  />
);

export const FormInput = props => (
  <StyledInput
    my={3}
    p={3}
    fontSize={3}
    border="1px solid white"
    borderRadius="6px"
    css={{ display: "block" }}
    {...props}
  />
);

export const Label = props => (
  <StyledLabel
    fontFamily="sans"
    py={3}
    fontWeight={6}
    fontSize={3}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

/* Lists */
export const StyledList = styled.ul`
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
`;

export const List = props => <StyledList listStyle="none" {...props} />;

export const StyledListItem = styled.p`
  ${space}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
`;

export const ListItem = props => (
  <StyledListItem
    textDecoration="none"
    fontFamily="sans"
    fontWeight={3}
    fontSize={3}
    lineHeight={1.5}
    p={1.5}
    {...props}
  />
);

export const TextArea = props => (
  <StyledTextArea
    width={[1]}
    fontSize={3}
    p={3}
    css={{ 
      height: "200px",
      fontSize: "16px"
   }}
    {...props}
  />
);

//* IMAGE TAGS
export const AvatarImg = props => (
  <I width="60px" height="60px" borderRadius="50%"  {...props} />
);

//* BUTTONS


export const UniButton = props => (
  <Btn width="auto" fontWeight={[1]} color="white" {...props} />
);
