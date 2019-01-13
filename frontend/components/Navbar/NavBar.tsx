import * as React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@rebass/emotion";

const NavBarHolder = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #e16973;
  margin-bottom: 5px;
  border-bottom: 10px solid #ea969d;
`;
const NavBarItem = styled.a`
  padding: 20px;
  cursor: pointer;
  font-family: "system-ui";
  color: white;
`;
const Avatar = styled.div`
  margin: 15px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #152338;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavBar: React.SFC = () => {
    return (
        <>
            <NavBarHolder>
                <Button variant="primary">Sign Out</Button>
                <Avatar>
                    <NavBarItem>K</NavBarItem>
                </Avatar>
            </NavBarHolder>
        </>
    );
};
export default NavBar;
