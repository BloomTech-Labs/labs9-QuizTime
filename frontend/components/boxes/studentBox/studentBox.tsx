import * as React from "react";
import { useState } from 'react';
import Link from "next/link";
import {
  BoxHolder,
  Emblem,
  BoxText,
  UniButton,
  Text,
  UpperCase
} from "../../design-system/primitives";
import { Flex, Box } from "@rebass/emotion";
import { css } from "@emotion/core";
import Modal from '../../Modal/index';
import StudentResults from '../../StudentResults';

//to get the quizzes to map through all you need is the
//quiz prop from the app page.
const StudentBox = ({ id, student }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden)
  }

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
            <UniButton onClick={toggleHidden} bg="blue.2" fontSize={0}>
              View Results
            </UniButton>
            {!isHidden &&
              <Modal>
                <Flex>
                  <StudentResults id={student.id} />
                  <Box>
                    <UpperCase
                      px={2}
                      color="blue.1"
                      fontWeight={6}
                      fontSize={2}
                      css={{ cursor: "pointer" }}
                      onClick={toggleHidden}
                    >x
                  </UpperCase>
                  </Box>
                </Flex>
              </Modal>
            }
          </Flex>
        </Box>
      </BoxHolder>
    </>
  );
};
export default StudentBox;
