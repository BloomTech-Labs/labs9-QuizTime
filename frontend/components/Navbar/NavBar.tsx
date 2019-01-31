import React, { Component } from 'react';
import { NavBarHolder, AvatarImg } from '../design-system/primitives';
import { getUserFromLocalCookie } from '../../utils/auth';
import AvatarPopup from './AvatarPopup'

<<<<<<< HEAD
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
=======
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

>>>>>>> 7d79bc3de4951e34a8119cebfa5fbc1f2995083a
export default NavBar;
