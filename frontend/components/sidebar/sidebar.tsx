import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box } from "@rebass/emotion";
import { SideBarHolder } from "../design-system/primitives";

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
        <BoxText>quizzes</BoxText>
      </Link>
      <Link href="/classes" prefetch>
        <BoxText>classes</BoxText>
      </Link>
      <Link href="/billing" prefetch>
        <BoxText>billing</BoxText>
      </Link>
      <Link href="/settings" prefetch>
        <BoxText>settings</BoxText>
      </Link>
      <Link href="/test" prefetch>
        <BoxText>test</BoxText>
      </Link>
      <Link href="/student?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNtZWppYUBnbWFpbC5jb20iLCJxdWl6X2lkIjoiMTIiLCJzdHVkZW50X2lkIjoiMzYiLCJpYXQiOjE1NDg0NTA3NjMsImV4cCI6MTU0ODcwOTk2MywianRpIjoiMTIzNCJ9.vn5NBuu5_ThGQwK3fgSxJgZxSNXoV_ddL5FAtCOmBJw" prefetch>
        <BoxText>student</BoxText>
      </Link>
    </SideBarHolder>
  );
};
export default SideBar;
