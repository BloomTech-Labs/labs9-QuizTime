import * as React from "react";
import { Box, Button, Flex } from "@rebass/emotion";
import {
  NavBarHolder,
  AvatarImg,
  BoldText,
  NavQuote,
  Text,
  Label
} from "../design-system/primitives";
import { unsetToken, getUserFromLocalCookie } from "../../utils/auth";
import { logout } from "../../utils/auth0";
import { useMedia } from "the-platform";
import { useState, useEffect } from "react";
import Link from "next/link";
import AvatarPopup from "./AvatarPopup";
import Router from "next/router";
import { css } from "@emotion/core";

const NavBar: React.SFC = () => {
  const small = useMedia("(max-width: 639px)");
  const user = getUserFromLocalCookie();
  const [isNavPopup, setIsNavPopup] = useState(false);
  const Links = small ? (
    <Flex width={1}>
      <Box mx={3}>
        <Link href="/classes">
          <Text fontSize={3} color="blue.4">
            classes
          </Text>
        </Link>
      </Box>
      <Box mx={3}>
        <Link href="/quizzes">
          <Text fontSize={3} color="blue.4">
            quizzes
          </Text>
        </Link>
      </Box>
    </Flex>
  ) : null;

  return (
    <NavBarHolder
      css={{
        position: "relative",
        justifyContent: "space-between"
      }}
    >
      {Links}
      <Flex
        flexDirection="row"
        css={css`
          width: auto;
        `}
      >
        <Label p={2} fontSize={1} fontWeight={0}>
          {JSON.stringify(Router.pathname.split("/").join(" > ")).replace(
            /\"/g,
            ""
          )}
        </Label>
      </Flex>
      <NavQuote>  
        <Text fontSize = {2} fontColor="blue.1" fontWeight={0}>"The beautiful thing about learning is that no one can take it away from you." - B.B. King</Text>  
      </NavQuote>
      <AvatarImg
        mr={4}
        onClick={() => setIsNavPopup(!isNavPopup)}
        src={user && user.picture ? user.picture : ""}
        alt="profile"
        css={css`
          cursor: pointer;
          transition: 0.2s;
          border: 2px solid transparent;
          &:hover {
            border: 2px solid #101440;
          }
        `}
      />

      <AvatarPopup isNavPopup={isNavPopup} />
    </NavBarHolder>
  );
};

export default NavBar;
