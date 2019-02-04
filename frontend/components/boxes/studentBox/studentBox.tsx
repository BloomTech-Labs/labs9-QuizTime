import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {
  BoxHolder,
  Emblem,
  BoxText,
  UniButton,
  Input
} from "../../design-system/primitives";
import { Flex, Box } from "@rebass/emotion";
import { css } from "@emotion/core";

//to get the quizzes to map through all you need is the
//quiz prop from the app page.
const StudentBox = ({ id, student }) => {
  return (
    <>
    <Input type="checkbox" />
      <BoxHolder
        css={css`
          border-bottom: 5px solid #70e89d;
          position: relative;
          transform-style: preserve-3d;
          transition: all 600ms;
          ${Input}:checked {
            transform: rotateX(180deg);
          }
        `}
      >
        <div
          css={css`
            position: relative;
            backface-visibility: hidden;
          `}
        >
          <Box
          m={1}
          css={css`
          
          `}
          >
            <Flex flexDirection="row" justifyContent="space-between">
              <BoxText fontWeight={1}>
                {" "}
                {student.first_name} {student.last_name}
              </BoxText>
              <UniButton fontSize={0} bg="blue.2">
                Delete
              </UniButton>
            </Flex>
          </Box>
          <Box
            p={1}
            css={css`
              border-top: 1px solid #b5ffd0;
            `}
          >
            <BoxText fontWeight={1}>{student.email}</BoxText>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              mt={1}
              p={1}
              css={css`
                border-top: 1px solid #b5ffd0;
              `}
            >
              <UniButton bg="green.1" fontSize={0}>
                Edit
              </UniButton>
            </Flex>
          </Box>
        </div>
        <div
          css={css`
            transform: rotateX(180deg);
            backface-visibility: hidden;
          `}
        >
          <Box p={1}>
            <Flex flexDirection="row" justifyContent="space-between">
            <BoxText fontWeight={1}>Quiz Results</BoxText>
              </Flex>
          </Box>
          <Box
          p={1}
            css={css`
              border-top: 1px solid #b5ffd0;
            `}
          >
          <Flex flexDirection="column" css={css`border-bottom:1px solid #b5ffd0;`}>
            <BoxText fontWeight={1}>Alg Quiz: 11/14</BoxText>
            </Flex>
          </Box>
        </div>
      </BoxHolder>
    </>
  );
};
export default StudentBox;
