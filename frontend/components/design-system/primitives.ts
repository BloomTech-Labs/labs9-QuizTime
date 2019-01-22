import {
  Box as B,
  Text as T,
  Flex as F,
  Button as Butt
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

/*
export const Text = system{
    is: "p",
    fontSize: "14px",
    fontFamily: "sans",
    fontWeight: "300"
*/
/* NAVIGATION COMPONENTS*/
export const NavBarHolder = props => (
  <F justifyContent="flex-end" alignItems="center" bg="red.1" {...props} />
);

export const SideBarHolder = props => (
  <F
    width="100px"
    bg="blue.2"
    flexDirection="column"
    css={{ minHeight: "100vh" }}
    {...props}
  />
);
const StyledText = styled.a`
  ${fontSize}
`;

export const BoxText = props => (
  <T StyledText p={1} fontFamily="sans" css={{ cursor: "pointer" }} {...props} />
);

/* CONTAINERS */

export const Container = props => (
  <B mx="auto" css={{ maxWidth: "800px" }} {...props} />
);

export const FullScreenContainer = props => (
  <F
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    width="100vw"
    css={{ height: "100vh" }}
    {...props}
  />
);

export const BoxHolder = props => (
  <F
    width="200px"
    m={1}
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    bg="white"
    css={{
      height: "200px",
      borderBottom: "10px solid red.1",
      borderRadius: "2px"
    }}
    {...props}
  />
);

export const StudentElement = props => (
  <F
  width="400px"
  flexDirection="row"
  justifyContent="spaceEvenly"
  alignItems="center"
  p={3}
  {...props}
  />
);
/* Holders */
export const SectionContainer = props => (
  <F
  justifyContent="center"
  width="100%"
  {...props}
  />
);


export const StudentHolder = props =>(
  <F
  width="450px"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  css={{
    height:"auto"
  }}
  {...props}
  />
);

export const QuizHolder = props => (
  <F
    width="80%"
    flexWrap="wrap"
    flexDirection="row"
    css={{
      height:"auto",
      border:"1px solid black",
    }}
  />
);
/*SMALLER COMPONENTS*/

export const Emblem = props => (
  <F
    justifyContent="center"
    alignItems="center"
    bg="#ffe88c"
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

export const UpperCase = props => (
  <T
    fontSize={1}
    fontFamily="sans"
    fontWeight={1}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

export const Button = props => <Butt variant="primary" {...props} />;

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

export const Form = props => (
  <StyledForm
    display="flex"
    flexDirection="row" 
    justifyContent="spaceEvenly"
    bg="white" 
    {...props} 
    />
)
export const Input = props => (
  <StyledInput
    p={2}
    my={2}
    border="none"
    borderBottom="1px solid red"
    {...props}
  />
);

export const Label = props => (
  <StyledLabel
    fontFamily="sans"
    fontWeight={6}
    fontSize={0}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);
