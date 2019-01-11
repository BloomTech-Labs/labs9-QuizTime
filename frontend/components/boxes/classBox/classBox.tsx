import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const BoxHolder = styled(Box)`
  border-bottom: 10px solid #ea969d; 
  border-radius: 2px; 
  width: 200px;
  height: 200px;
  margin: 5px;
  background: white; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  transition: border-bottom-color 1s ease-out;
  &:hover{
    border-bottom:10px solid #e16973;
  }
`;
const Emblem = styled(Box)`
width: 70px;
height: 70px;
background: #46da84; 
clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
transition: background-color 1s ease-out;
&:hover{
    background: #e16973;
  }
`;

const BoxText = styled.a`
  font-family: system-ui; 
  padding: 15px;
`;
const ClassBox: React.SFC = ({classes}) => {
  return (
    <>
      <BoxHolder>
        {/* what we will want is for the title of the class and also the 
                number of students in the class, the average grade of the class
                and the number of quizzes the class has and will take */}
          <Emblem />
          <BoxText>{classes.name}</BoxText>
      </BoxHolder>
    </>
  );
};
export default ClassBox;