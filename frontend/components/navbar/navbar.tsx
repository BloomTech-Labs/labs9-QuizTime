import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";

const NavBarHolder = styled(Box)`
    border: 1px solid red; 
    padding: 10px;
    width: 1000px; 
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 
    margin: 0; 
`;
const BoxText = props => <Text {...props} fontFamily="sans" />;

const NavBar: React.SFC = () => {
    return(
        <>
        <NavBarHolder>
            <BoxText>Sign Out</BoxText>
        </NavBarHolder>
        </>
    )
}
export default NavBar;