import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const BoxHolder = styled(Box)`
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

const ClassBox: React.SFC = () => {
  return (
    <>
      <BoxHolder>
        {/* what we will want is for the title of the class and also the 
                number of students in the class, the average grade of the class
                and the number of quizzes the class has and will take */}
        <BoxTextHolder>
          <BoxText>Title:</BoxText>
          <BoxText>Students: 0</BoxText>
          <BoxText>Average Grade: 0</BoxText>
          <BoxText>Quizzes: 0</BoxText>
        </BoxTextHolder>
      </BoxHolder>
    </>
  );
};
export default ClassBox;
