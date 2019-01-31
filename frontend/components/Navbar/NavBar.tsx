import * as React from "react";
import styled from "@emotion/styled";
import { Box, Button, Flex } from "@rebass/emotion";
import { NavBarHolder, AvatarImg, BoldText } from "../design-system/primitives";
import { unsetToken, getUserFromLocalCookie } from "../../utils/auth";
import { logout } from "../../utils/auth0";
import { useMedia } from "the-platform";
import { useState, useEffect } from "react";
import Link from "next/link";

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

const user = getUserFromLocalCookie();
const NavBar: React.SFC = () => {
  const small = useMedia("(max-width: 639px)");

  const Links = small ? (
    <Flex width={1}>
      <Box mx={3}>
        <Link href="/classes">
          <BoldText color="white">classes</BoldText>
        </Link>
      </Box>
      <Box mx={3}>
        <Link href="/quizzes">
          <BoldText color="white">quizzes</BoldText>
        </Link>
      </Box>
    </Flex>
  ) : null;

  return (
    <NavBarHolder>
      {Links}
      <AvatarImg
        src={user && user.picture ? user.picture : null}
        alt="profile"
      />
    </NavBarHolder>
  );
};

export default NavBar;
