import * as React from 'react';
import { Box, Button, Flex } from '@rebass/emotion';
import {
  NavBarHolder,
  AvatarImg,
  BoldText,
  Text,
  ButtonLink,
  UpperCase,
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
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CREDITS_QUERY = gql`
  query GET_CREDITS_QUERY($id: String!) {
    teacher(where: { id: { _eq: $id } }) {
      credits
    }
  }
`;

const NavBar: React.SFC = () => {
  const small = useMedia('(max-width: 639px)');
  const [isNavPopup, setIsNavPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [breadCrumb, setBreadCrumb] = useState('');

  useEffect(() => {
    const userFromCookie = getUserFromLocalCookie();
    const breadCrumb = JSON.stringify(
      Router.pathname.split('/').join(' > ')
    ).replace(/\"/g, '');
    setBreadCrumb(breadCrumb);
    setUser(userFromCookie);
  }, []);

  useEffect(() => {
    console.log('user is now', user);
  }, [user]);

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
      py={0}
      px={2}
      css={{
        position: 'relative',
        justifyContent: 'space-between',
      }}
    >
      {Links}
      <Flex justifyContent='space-between' width='100%' alignItems='center'>
        <Box>
          <UpperCase>
            <BoldText fontSize={2}>{!small ? breadCrumb : null}</BoldText>
          </UpperCase>
        </Box>
        
        <Flex
          p={1}
          alignItems='center'
          pl={0}

        >
        <Query
          query={GET_CREDITS_QUERY}
          variables={user ? { id: user.sub } : { id: '' }}
          pollInterval={10000}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <Link href='/settings'>
                  <ButtonLink
                    fontSize={[0, 1]}
                    px={['5px', '10px']}
                    m={0}
                    mr={'20px'}
                  >
                    Loading ...
                  </ButtonLink>
                </Link>
              );
            if (data.teacher.length > 0) {
              return (
                <Link href='/settings'>
                  <ButtonLink
                    fontSize={1}
                    px={['5px', '10px']}
                    m={0}
                    mr={['10px', '20px']}
                  >
                    Credits: {data.teacher[0].credits}
                  </ButtonLink>
                </Link>
              );
            } else {
              return (
                <Link href='/settings'>
                  <ButtonLink
                    m={0}
                    py={'10px'}
                    fontSize={1}
                    mr={['10px', '20px']}
                  >
                    Loading ...
                  </ButtonLink>
                </Link>
              );
            }
          }}
        </Query>
        <Box           onMouseOver={() => setIsNavPopup(true)}
          onMouseOut={() => setIsNavPopup(false)}>

          <AvatarImg
            mr={3}
            src={user ? user.picture : ''}
            alt='profile'
            css={css`
              cursor: pointer;
              transition: all 0.2s ease;
              border: ${isNavPopup
                ? '3px solid #101440'
                : '3px solid transparent'};
            `}
          />
          <AvatarPopup isNavPopup={isNavPopup} />
        </Box>
        </Flex>
      </Flex>
    </NavBarHolder>
  );
};
export default NavBar;
