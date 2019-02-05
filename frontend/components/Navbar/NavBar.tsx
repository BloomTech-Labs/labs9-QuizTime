import * as React from "react";
import { Box, Button, Flex } from "@rebass/emotion";
import { NavBarHolder, AvatarImg, BoldText } from "../design-system/primitives";
import { unsetToken, getUserFromLocalCookie } from "../../utils/auth";
import { logout } from "../../utils/auth0";
import { useMedia } from "the-platform";
import { useState, useEffect } from "react";
import Link from "next/link";
import AvatarPopup from "./AvatarPopup";

const NavBar: React.SFC = () => {
  const small = useMedia("(max-width: 639px)");
  const user = getUserFromLocalCookie();
  const [isNavPopup, setIsNavPopup] = useState(false);
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
    <NavBarHolder css={{ position: "relative" }}>
      {Links}
      <AvatarImg
        mr={3}
        onClick={() => setIsNavPopup(!isNavPopup)}
        src={user && user.picture ? user.picture : ""}
        alt="profile"
      />

      <AvatarPopup isNavPopup={isNavPopup} />
    </NavBarHolder>
  );
};

export default NavBar;
