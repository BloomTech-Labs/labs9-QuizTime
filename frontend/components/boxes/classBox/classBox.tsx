import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Flex, Box } from "@rebass/emotion";
import { BoxHolder, BoxText, UpperCase } from "../../design-system/primitives";
import { css } from "@emotion/core";

const ClassBox: React.SFC<{ className: object }> = ({ className }) => {
  return (
    <>
      <Link href={`/classes/class?id=${className.id}`}>
        <BoxHolder
          css={css`
            border-bottom: 5px solid #70e89d;
            cursor: pointer;
          `}
        >
          {/* what we will want is for the title of the class and also the 
                number of students in the class, the average grade of the class
                and the number of quizzes the class has and will take */}
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
            <UpperCase fontSize={3}>{className.name}</UpperCase>
          </Flex>
        </BoxHolder>
      </Link>
    </>
  );
};
export default ClassBox;
