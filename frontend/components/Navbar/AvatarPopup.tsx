import React from 'react';
import Router from 'next/router';
import { Flex, Box, Text } from '@rebass/emotion';
import { BoldText } from '../design-system/primitives';
import { logout } from '../../utils/auth0';
import { unsetToken } from '../../utils/auth';

const AvatarPopup = ({isNavPopup}) => {
  return (
    <Box
      style={{
        position: 'absolute',
        width: 120,
        backgroundColor: 'rgba(112, 232, 157, 1)',
        borderRadius: '10px',
        padding: 25,
        right: 3,
      }}
      css={{
        transition: 'all .6s ease-out',
        opacity: isNavPopup ? 1 : 0,
        top: isNavPopup ? 64 : 50,
        visibility: isNavPopup ? 'visible' : 'hidden',
      }}
    >
      <Flex flexDirection='column'>
        <BoldText
          fontWeight={400}
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
          fontSize={1}
          onClick={() => {
            Router.push('/settings');
          }}
          fontWeight={400}
          ml={1}
          mb={20}
          css={{ cursor: 'pointer' }}
        >
          SETTINGS
        </BoldText>
        <BoldText
          fontSize={1}
          fontWeight={400}
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
