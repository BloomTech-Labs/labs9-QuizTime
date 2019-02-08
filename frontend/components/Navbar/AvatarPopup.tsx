import * as React from 'react';
import Router from 'next/router';
import { Flex, Box, Text } from '@rebass/emotion';
import { BoldText } from '../design-system/primitives';
import { logout } from '../../utils/auth0';
import { unsetToken } from '../../utils/auth';
import { css } from '@emotion/core';
import { useMedia } from 'the-platform';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const AvatarPopup: React.SFC = ({ isNavPopup }) => {
  const small = useMedia('(max-width: 639px)');
  return (
    <Box
      bg={'blue.4'}
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
        top: isNavPopup ? 72 : 65,
        visibility: isNavPopup ? 'visible' : 'hidden',
      }}
    >
      <Flex flexDirection='column'>
        {/* <BoldText
          fontWeight={5}
          fontSize={1}
          ml={1}
          mb={20}
          css={css`
            color: white;
            cursor: pointer;
            transition: all 0.2s ease;
            &:hover {
              color: #44c173;
            }
          `}
          onClick={() => {
            Router.push(
              '/student?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNtZWppYUBnbWFpbC5jb20iLCJxdWl6X2lkIjoiMTIiLCJzdHVkZW50X2lkIjoiMTEwIiwiaWF0IjoxNTQ5Mzg2OTU2LCJleHAiOjE1NDk2NDYxNTYsImp0aSI6IjEyMzQifQ.Tv2-L43Mfb2WXxZvGf9H82HKYf9FIpaoQ0OeoUyKKQE'
            );
          }}
        >
          STUDENT
        </BoldText> */}
        <BoldText
          fontWeight={5}
          fontSize={1}
          onClick={() => {
            Router.push('/settings');
          }}
          ml={1}
          mb={20}
          css={css`
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover {
            color: #44c173;
          }
        `}
        >
          SETTINGS
        </BoldText>
        <BoldText
          fontSize={1}
          fontWeight={5}
          ml={1}
          css={css`
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover {
            color: #44c173;
          }
        `}
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
