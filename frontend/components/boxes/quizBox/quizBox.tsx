import * as React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Flex, Box } from '@rebass/emotion';
import {
  BoxHolder,
  UpperCase,
  UniButton,
} from '../../design-system/primitives';
import { css } from '@emotion/core';

const ATag = styled.a`
  text-decoration: none;
`;

//to get the quizzes to map through all you need is the
//quiz prop from the app page.
const QuizBox: React.SFC<{ quiz: object }> = ({ quiz }) => {
  return (
    <>
      <Link href={`/quizzes/quiz?title=${quiz.id}`}>
        <BoxHolder
          css={css`
            border-bottom: 5px solid #70e89d;
            cursor: pointer;
          `}
        >
          <Flex
            p={3}
            css={css`
              border-bottom: 1px solid #b5ffd0;
              transition: background-color 1s ease-out;
              &:hover {
                background-color: #b5ffd0;
              }
            `}
          >
            <ATag>
                <UpperCase fontSize={3}>{quiz.name}</UpperCase>
            </ATag>
          </Flex>
          <Box m={2}>
            <UniButton bg='blue.2' fontSize={0} css={{ cursor: 'pointer' }}>
              View / Edit
            </UniButton>
          </Box>
        </BoxHolder>
      </Link>
    </>
  );
};
export default QuizBox;
