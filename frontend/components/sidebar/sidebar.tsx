import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Text, Box } from "@rebass/emotion";

const SideBarObj = styled(Box)`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  border: 1px solid grey;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex; 
  flex-direction: column;
`;

const BoxText = styled.a`
    font-family: "system-ui";
    padding: 5px;
    cursor: pointer;
`;

const SideBar: React.SFC = () => {
  return (
    <>
      <SideBarObj>
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
