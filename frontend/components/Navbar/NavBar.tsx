import * as React from "react";
import { Box, Button, Flex } from "@rebass/emotion";
<<<<<<< HEAD
import { NavBarHolder, AvatarImg, BoldText, Label } from "../design-system/primitives";
=======
import { NavBarHolder, AvatarImg, BoldText, Text } from "../design-system/primitives";
>>>>>>> 7ab582fe536f7f551c33b93e05be553dbfed72f5
import { unsetToken, getUserFromLocalCookie } from "../../utils/auth";
import { logout } from "../../utils/auth0";
import { useMedia } from "the-platform";
import { useState, useEffect } from "react";
import Link from "next/link";
import AvatarPopup from "./AvatarPopup";
import Router from "next/router";
import { css } from "@emotion/core";

<<<<<<< HEAD
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

{
  /* <Flex
flexDirection="row"
css={css`
  width: auto;
`}
>
<Label fontSize={1} fontWeight={0}>
{/* {JSON.stringify(Router.pathname.split('/').join(' > ')).replace(/\"/g, "")} */
}
// </Label>
// </Flex> */}

=======
>>>>>>> 7ab582fe536f7f551c33b93e05be553dbfed72f5
const NavBar: React.SFC = () => {
  const small = useMedia("(max-width: 639px)");
  const user = getUserFromLocalCookie();
  const [isNavPopup, setIsNavPopup] = useState(false);
  const Links = small ? (
    <Flex width={1}>
      <Box mx={3}>
        <Link href="/classes">
          <Text fontSize = {3} color="white">classes</Text>
        </Link>
      </Box>
      <Box mx={3}>
        <Link href="/quizzes">
          <Text fontSize={3} color="white">quizzes</Text>
        </Link>
      </Box>
    </Flex>
  ) : null;

  return (
    <NavBarHolder css={{ position: "relative" }}>
      {Links}
      <Flex
        flexDirection="row"
        css={css`
          width: auto;
        `}
      >
        <Label fontSize={1} fontWeight={0}>
          {JSON.stringify(Router.pathname.split('/').join(' > ')).replace(/\"/g, "")}
        </Label>
      </Flex>
      <AvatarImg
        mr={4}
        onClick={() => setIsNavPopup(!isNavPopup)}
        src={user && user.picture ? user.picture : ""}
        alt="profile"
      />

      <AvatarPopup isNavPopup={isNavPopup} />
    </NavBarHolder>
  );
};

export default NavBar;
