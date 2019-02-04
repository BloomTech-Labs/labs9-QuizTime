import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {
  BoxHolder,
  Emblem,
  BoxText,
  Button
} from "../../design-system/primitives";
import { Flex, Box } from "@rebass/emotion";

const ATag = styled.a`
  text-decoration: none;
`;

//to get the quizzes to map through all you need is the
//quiz prop from the app page.
const StudentBox = ({ id, student }) => {
  return (
    <>
      <BoxHolder>
        <Flex flexDirection="row" alignItems="top">
          <Box>
            <BoxText>
              {" "}
              {student.first_name} {student.last_name}
            </BoxText>
            <BoxText>{student.email}</BoxText>
            <BoxText>Average: </BoxText>
          </Box>
          <Box>
            <Flex justifyContent="flex-end">
              <Button m={2} variant="error">
                X
              </Button>
            </Flex>
          </Box>
        </Flex>
      </BoxHolder>
    </>
  );
};
export default StudentBox;
