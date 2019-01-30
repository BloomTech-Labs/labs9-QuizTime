import * as React from 'react';
import styled from '@emotion/styled';
import { Box, Button } from '@rebass/emotion';
import { NavBarHolder, AvatarImg } from '../design-system/primitives';
import { unsetToken, getUserFromLocalCookie } from '../../utils/auth';
import { logout } from '../../utils/auth0';

const user = getUserFromLocalCookie();
const NavBar: React.SFC = () => {
  return (
    <NavBarHolder>
      <Button
        onClick={event => {
          event.preventDefault();
          unsetToken();
          logout();
        }}
        variant='primary'
      >
        Sign Out
      </Button>
      <AvatarImg
        src={user && user.picture ? user.picture : null}
        alt='profile'
      />
    </NavBarHolder>
  );
};
export default NavBar;
