import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box } from "@rebass/emotion";

const SideBarObj = styled(Box)`
  height: 700px;
  width: 100px;
  background: #152338;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex; 
  flex-direction: column;
`;

const BoxText = styled.a`
    font-family: "system-ui";
    padding:10px;
    cursor: pointer;
    color:#f4f4f4; 
    transition: background-color 1s ease-out;
      &:hover{
        background-color: #f4f4f4;
        color:#152338 ; 
      }
`;

const SideBar: React.SFC = () => {
  return (
    <>
      <SideBarObj>
          <BoxText>QuizTime</BoxText>
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
      </SideBarObj>
    </>
  );
};
export default SideBar;
