import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { BoxHolder, Emblem, BoxText } from "../../design-system/primitives";
import { css } from "@emotion/core";


const ATag = styled.a`
  text-decoration: none;
`;

//to get the quizzes to map through all you need is the
//quiz prop from the app page.
const QuizBox: React.SFC<{ quiz: object }> = ({ quiz }) => {
  return (
    <>
      <BoxHolder>
        <Link href={`/quizzes/quiz?title=${quiz.id}`}>
          <ATag>
            <BoxText>{quiz.name}</BoxText>
          </ATag>
        </Link>
      </BoxHolder>
    </>
  );
};
export default QuizBox;
