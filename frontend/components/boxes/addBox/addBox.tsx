import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const AddBoxHolder = styled(Box)`
  border: 1px black;
  border-style: dashed; 
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin: 5px;
  display: flex;
  justify-content: center; 
  align-items: center;
`;
const BoxText = props => <Text {...props} fontFamily="sans" />;

const AddBox: React.SFC = () => {
  return (
    <>
      <AddBoxHolder>
        {/* what we will want is for the user to be able to click on the + and
        output a quiz or class box */}
        <BoxText>+</BoxText>
      </AddBoxHolder>
    </>
  );
};
export default AddBox;
