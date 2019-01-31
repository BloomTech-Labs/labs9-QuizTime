import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box } from "@rebass/emotion";
import { SideBarHolder, UpperCase } from "./design-system/primitives";

const BoxText = styled.a`
  font-family: "system-ui";
  padding: 10px;
  cursor: pointer;
  color: #f4f4f4;
  transition: background-color 1s ease-out;
  &:hover {
    background-color: #f4f4f4;
    color: #152338;
  }
`;

const SideBar: React.SFC = () => {
  return (
    <SideBarHolder>
      <Link href="/" prefetch>
        <BoxText>QuizTime</BoxText>
      </Link>
      <Link href="/quizzes" prefetch>
        <UpperCase color="white">quizzes</UpperCase>
      </Link>
      <Link href="/classes" prefetch>
        <UpperCase color="white">classes</UpperCase>
      </Link>
    </SideBarHolder>
  );
};
export default SideBar;
