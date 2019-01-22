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

export const BoxText = props => (
  <T
    p={3}
    fontFamily="sans"
    {...props}
  />
)
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
    borderBottom:"10px solid red.1",
    borderRadius:"2px",
  }}
  {...props}
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
    height:"70px",
    clipPath:"polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
  }}
   />
)
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
  ${space}
  ${width}
  ${borders}
  ${color}
`;
export const Form = props => <StyledForm bg="white" {...props} />;

export const StyledInput = styled.input`
  ${space}
  ${width}
  ${borders}
  ${display}
`;
export const Input = props => (
  <StyledInput
    display="block"
    p={2}
    my={2}
    border="none"
    borderBottom="1px solid red"
    {...props}
  />
);

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
export const Label = props => (
  <StyledLabel
    fontFamily="sans"
    fontWeight={6}
    fontSize={0}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

//
