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

export const Form = props => <StyledForm bg="white" {...props} />;

export const Label = props => (
  <StyledLabel
    fontFamily="sans"
    fontWeight={6}
    fontSize={0}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

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

//
