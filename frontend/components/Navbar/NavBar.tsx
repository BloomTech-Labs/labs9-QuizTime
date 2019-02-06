import * as React from 'react';
import { Box, Button, Flex } from '@rebass/emotion';
import {
  NavBarHolder,
  AvatarImg,
  BoldText,
  NavQuote,
  Text,
  Label,
} from '../design-system/primitives';
import { unsetToken, getUserFromLocalCookie } from '../../utils/auth';
import { logout } from '../../utils/auth0';
import { useMedia } from 'the-platform';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AvatarPopup from './AvatarPopup';
import Router from 'next/router';
import { css } from '@emotion/core';

const NavBar: React.SFC = () => {
  const small = useMedia('(max-width: 639px)');
  const [isNavPopup, setIsNavPopup] = useState(false);
  const [user, setUser] = useState(null)
  const [breadCrumb, setBreadCrumb] = useState('')
  
  useEffect(() => {
    const user = getUserFromLocalCookie()
    const breadCrumb = JSON.stringify(Router.pathname.split("/").join(" > ")).replace(
      /\"/g,
      ""
    )
    setUser(user)
    setBreadCrumb(breadCrumb)
  },[])

  const Links = small ? (
    <Flex width={1}>
      <Box mx={3}>
        <Link href='/classes'>
          <Text fontSize={3} color='blue.4'>
            classes
          </Text>
        </Link>
      </Box>
      <Box mx={3}>
        <Link href='/quizzes'>
          <Text fontSize={3} color='blue.4'>
            quizzes
          </Text>
        </Link>
      </Box>
    </Flex>
  ) : null;

  return (
    <NavBarHolder
      css={{
        position: 'relative',
        justifyContent: 'space-between',
      }}
    >
      {Links}
      <Flex
        flexDirection='row'
        css={css`
          width: auto;
        `}
      >
        <Label fontSize={1} fontWeight={0}>
          {breadCrumb}
        </Label>
      </Flex>
      <Box p={1} pl={0}
        onMouseOver={() => setIsNavPopup(true)}
        onMouseOut={() => setIsNavPopup(false)}
      >
        <AvatarImg
          mr={4}
          src={user && user.picture ? user.picture : ''}
          alt='profile'
          css={css`
            cursor: pointer;
            transition: all 0.2s ease;
            border: ${isNavPopup ? '3px solid #101440' : '3px solid transparent'};
          `}
        />
        <AvatarPopup isNavPopup={isNavPopup} />
      </Box>
    </NavBarHolder>
  );
};

export default NavBar;
