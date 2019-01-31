//carey
import React from 'react';
import { css } from '@emotion/core';
import { Box, Flex } from '@rebass/emotion';
import {
  Container,
  Text,
  QuizBox,
  UpperCase,
  InfoSection,
  FlexColumns,
  LandingText,
  HeaderText,
  BoxText,
} from '../../components/design-system';
import { authorize } from '../../utils/auth0';
const GetStarted = props => {
  return (
    <>
      <Box my={5}>
        <LandingText color='blue.1' fontSize={6} css={{ textAlign: 'center' }}>
          Getting Started
        </LandingText>
        <FlexColumns>
          <Box
            my={3}
            mx={5}
            p={4}
            bg='blue.2'
            width='360px'
            css={{
              border: '1px solid white',
              height: '360px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <LandingText fontWeight={3} color='white' fontSize={5}>
              Free Plan
            </LandingText>
            <Box>
              <LandingText
                fontWeight={3}
                fontSize={[3, 4]}
                color='white'
                lineHeight={1.5}
              >
                Sign up now and make ten quizzes for free!
              </LandingText>
            </Box>
            <Box
              css={{
                width: '80%',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 5px 20px rgba(0,0,0,0.50)',
                },
              }}
            >
              <HeaderText
                fontSize={[4,5]}
                onClick={authorize}
                bg='green.1'
                color='blue.1'
                css={css`
                  cursor: pointer;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                Try Now!
              </HeaderText>
            </Box>
          </Box>
          <Box
            my={3}
            mx={5}
            p={4}
            bg='blue.2'
            width='360px'
            css={{
              border: '1px solid white',
              height: '360px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <LandingText
              fontWeight={3}
              color='white'
              fontSize={5}
              // css={css`
              //   @media (max-width: 500px) {
              //     position: relative;
              //     bottom: -50px;
              //   }
              // `}
            >
              Pro Plan
            </LandingText>
            <Box>
              <LandingText
                fontWeight={3}
                fontSize={[3, 4]}
                color='white'
                lineHeight={1.5}
              >
                Get unlimited quizzes for a low monthly fee of $9.95.
              </LandingText>
            </Box>
            <Box
              css={{
                width: '80%',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 5px 20px rgba(0,0,0,0.50)',
                },
              }}
            >
              <HeaderText
                fontSize={[4,5]}
                onClick={authorize}
                bg='green.1'
                color='blue.1'
                css={css`
                  cursor: pointer;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                Get Started
              </HeaderText>
            </Box>
          </Box>
        </FlexColumns>
      </Box>
    </>
  );
};

export default GetStarted;
