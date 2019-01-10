import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const Holder = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavBarObj = styled(Box)`
  height: 50px;
  width: 1150px;
  border: 1px solid grey;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const BoxText = props => <Text {...props} fontFamily="sans" />;

const NavBar: React.SFC = () => {
  return (
    <>
      <Holder>
        <NavBarObj>
          <BoxText>Sign Out</BoxText>
        </NavBarObj>
      </Holder>
    </>
  );
};
export default NavBar;
