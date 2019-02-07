import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const AddBoxHolder = styled(Box)`
  border: 10px lightgrey;
  border-style: dashed;
  border-radius: 5px;
	width: 200px;
	height: 200px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 16px;
  transition: 0.5s;
  &:hover{
    background: #B5FFD0;
  }
`;
const AddBtn = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center; 
  color: #f4f4f4;
  font-size: 30px;
`;

const BoxText = props => <Text {...props} mb={1} fontFamily="sans" color="#f4f4f4" fontSize="30px"/>;

const AddBox: React.SFC = () => {
  return (
    <>
      <AddBoxHolder>
        {/* what we will want is for the user to be able to click on the + and
        output a quiz or class box */}
        <AddBtn><BoxText>+</BoxText></AddBtn>
      </AddBoxHolder>
    </>
  );
};
export default AddBox;
