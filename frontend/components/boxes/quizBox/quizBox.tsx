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
background: #ea969d; 
clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
transition: background-color 1s ease-out;
&:hover{
    background: #e16973;
  }
`;

const BoxText = styled.a`
  font-family: system-ui; 
  padding: 20px;
`;


const QuizBox: React.SFC = ({quiz}) => {
  return (
    <>
      <BoxHolder>
        {/* what we will want is for the title of the Quiz and also the 
                number of classes that have this quiz assigned to be mapped
                through the entries of the two text sections. */}
        <Emblem />
          <BoxText>{quiz.name}</BoxText>
      </BoxHolder>
    </>
  );
};
export default QuizBox;
