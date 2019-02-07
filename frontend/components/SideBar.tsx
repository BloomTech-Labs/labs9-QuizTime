import * as React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Box, Flex } from '@rebass/emotion';
import { SideBarHolder, UpperCase } from './design-system/primitives';
import { useMedia } from 'the-platform';
import { css } from '@emotion/core';

const BoxText = styled.a`
  font-family: 'system-ui';
  padding: 10px;
  cursor: pointer;
  color: #f4f4f4;
`;

const SideBar: React.SFC = () => {
  const large = useMedia('(min-width: 640px)');
  return (
    <SideBarHolder>
      {large && (
        <Flex ml={2} width={1} flexDirection='column' alignItems='flex-start'>
          <Box m={1} mb={4}>
            <Link href='/' prefetch>
              <BoxText
                css={css`
                  color: white;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  &:hover {
                    color: #44c173;
                  }
                `}
              >
                QuizTime
              </BoxText>
            </Link>
          </Box>
          <Box m={3} my={3}>
            <Link href='/classes' prefetch>
              <UpperCase
                fontSize={2}
                css={css`
                  color: white;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  &:hover {
                    color: #44c173;
                  }
                `}
              >
                classes
              </UpperCase>
            </Link>
          </Box>
          <Box m={3} my={3}>
            <Link href='/quizzes' prefetch>
              <UpperCase
                fontSize={2}
                css={css`
                  color: white;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  &:hover {
                    color: #44c173;
                  }
                `}
              >
                quizzes
              </UpperCase>
            </Link>
          </Box>
        </Flex>
      )}
    </SideBarHolder>
  );
};
export default SideBar;
