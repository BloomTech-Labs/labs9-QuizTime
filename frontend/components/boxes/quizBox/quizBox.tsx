import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const BoxHolder = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin: 5px;
`;

const BoxTextHolder = styled(Box)`
  padding: 5px;
`;
const BoxText = props => <Text {...props} fontFamily="sans" />;

const QuizBox: React.SFC = () => {
  return (
    <>
      <BoxHolder>
        {/* what we will want is for the title of the Quiz and also the 
                number of classes that have this quiz assigned to be mapped
                through the entries of the two text sections. */}
        <BoxTextHolder>
          <BoxText>Title:</BoxText>
          <BoxText>Class Assigned: 0</BoxText>
        </BoxTextHolder>
      </BoxHolder>
    </>
  );
};
export default QuizBox;
