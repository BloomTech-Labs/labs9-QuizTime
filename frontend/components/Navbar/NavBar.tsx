import * as React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@rebass/emotion";
import {Avatar, Text, NavBarHolder} from "../design-system/primitives";
import {unsetToken} from "../../utils/auth";
import {logout} from "../../utils/auth0"; 

// const NavBarHolder = styled(Box)`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   background: #e16973;
//   margin-bottom: 5px; 
//   border-bottom: 10px solid #ea969d;
// `;
const NavBarItem = styled.a`
  padding: 20px;
  cursor: pointer;
  font-family: "system-ui";
  color: white;
`;
// const Avatar = styled.div`
//   margin: 15px;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background: #152338;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const NavBar: React.SFC = () => {
  return (
    <NavBarHolder>
      <Button onClick={(event) => {
        event.preventDefault()
        unsetToken()
        logout() 
        }}
         variant="primary">Sign Out</Button>
      <Avatar>
        <Text>K</Text>
      </Avatar>
    </NavBarHolder>
  );
};
export default NavBar;
