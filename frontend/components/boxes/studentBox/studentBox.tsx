import * as React from "react";
import Link from "next/link";
import {
  BoxHolder,
  Emblem,
  BoxText,
  UniButton
} from "../../design-system/primitives";
import { Flex, Box } from "@rebass/emotion";
import { css } from "@emotion/core";

//to get the quizzes to map through all you need is the
//quiz prop from the app page.
const StudentBox = ({ id, student }) => {
  return (
    <>
      <BoxHolder
        css={css`
          border-bottom: 5px solid #70e89d;
        `}
      >
        <Box m={1} css={css``}>
          <Flex flexDirection="row" justifyContent="space-between">
            <BoxText fontWeight={1}>
              {" "}
              {student.first_name} {student.last_name}
            </BoxText>
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
            <UniButton bg="blue.2" fontSize={0}>
              View Results
            </UniButton>
          </Flex>
        </Box>
      </BoxHolder>
    </>
  );
};
export default StudentBox;
