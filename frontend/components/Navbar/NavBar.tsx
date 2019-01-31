import React, { Component } from 'react';
import { NavBarHolder, AvatarImg } from '../design-system/primitives';
import { getUserFromLocalCookie } from '../../utils/auth';
import AvatarPopup from './AvatarPopup'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getUserFromLocalCookie(),
      isNavPopup: false,
    };
  }

  render() {
    const { user, isNavPopup } = this.state;

    return (
      <NavBarHolder css={{position: 'relative'}}>
        <AvatarImg
          mr={3}
          onClick={() => this.setState({ isNavPopup: !isNavPopup })}
          src={user && user.picture ? user.picture : ''}
          alt='profile'
        />
        <AvatarPopup isNavPopup={isNavPopup} />
      </NavBarHolder>
    );
  }
}

export default NavBar;
