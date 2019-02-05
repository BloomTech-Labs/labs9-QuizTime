import * as React from 'react';
import Router from 'next/router';
import { Flex, Box, Text } from '@rebass/emotion';
import { BoldText } from '../design-system/primitives';
import { logout } from '../../utils/auth0';
import { unsetToken } from '../../utils/auth';
import { css } from '@emotion/core';
import { useMedia } from 'the-platform';

const AvatarPopup: React.SFC = ({ isNavPopup }) => {
  const small = useMedia('(max-width: 639px)');
  return (
    <Box
      bg={['blue.1', 'green.1', 'green.1']}
      className='avatar-popup'
      style={{
        position: 'absolute',
        width: 120,
        borderRadius: '10px',
        padding: 25,
        right: 3,
      }}
      css={{
        transition: 'all .2s ease-out',
        opacity: isNavPopup ? 1 : 0,
        top: isNavPopup ? 64 : 50,
        visibility: isNavPopup ? 'visible' : 'hidden',
      }}
    >
      <Flex flexDirection='column'>
        <BoldText
          color='white'
          fontWeight={5}
          fontSize={1}
          ml={1}
          mb={20}
          css={{
            cursor: 'pointer',
          }}
          onClick={() => {
            Router.push(
              '/student?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNtZWppYUBnbWFpbC5jb20iLCJxdWl6X2lkIjoiMTIiLCJzdHVkZW50X2lkIjoiNDUiLCJpYXQiOjE1NDg5ODAzNTksImV4cCI6MTU0OTIzOTU1OSwianRpIjoiMTIzNCJ9.lO65CJ_Uzlg_zg-qegpa5uSh5-cvdBepY0j4tKzqCZQ'
            );
          }}
        >
          STUDENT
        </BoldText>
        <BoldText
          color='white'
          fontWeight={5}
          fontSize={1}
          onClick={() => {
            Router.push('/settings');
          }}
          ml={1}
          mb={20}
          css={{ cursor: 'pointer' }}
        >
          SETTINGS
        </BoldText>
        <BoldText
          fontSize={1}
          color='white'
          fontWeight={5}
          ml={1}
          css={{ cursor: 'pointer' }}
          onClick={event => {
            event.preventDefault();
            unsetToken();
            logout();
          }}
        >
          LOG OUT
        </BoldText>
      </Flex>
    </Box>
  );
};

export default AvatarPopup;
