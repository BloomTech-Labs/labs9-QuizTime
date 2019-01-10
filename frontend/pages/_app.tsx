import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import theme from "../utils/theme.ts";
import NavBar from "../components/navbar/navbar";
import SideBar from "../components/sidebar/sidebar";
import AddBox from "../components/boxes/addBox/addBox";
import QuizBox from "../components/boxes/quizBox/quizBox";
import ClassBox from "../components/boxes/classBox/classBox";
import styled from "@emotion/styled";
const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
`;
class QuizTime extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <NavBar />
          <SideBar />
          <Holder>
            <ClassBox />
            <QuizBox />
            <QuizBox />
            <AddBox />
          </Holder>
        </ThemeProvider>
      </Container>
    );
  }
}

export default QuizTime;
