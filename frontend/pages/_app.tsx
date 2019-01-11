import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { ApolloProvider } from "react-apollo";
import { Global } from "@emotion/core";
import theme from "../utils/theme";
import withData from "../utils/withData";
import QuizBox from "../components/boxes/quizBox/quizBox";
import SideBar from "../components/sidebar/sidebar";
import styled from "@emotion/styled";

const Page = styled.div`
	background: #f4f4f4; 
	width: 100%; 
	height: 700px;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
`; 
const CardHolder = styled.div`
	display: flex; 
	justify-content: flex-end;
	
`;
const Holder = styled.div`
  width: 1060px;
  height: auto; 
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-end;
`;
class QuizTime extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
		  <Page>
            <SideBar />
			<Component />
			<CardHolder>
            <Holder>
              <QuizBox />
			  <QuizBox />
			  <QuizBox />
			  <QuizBox />
			  <QuizBox />
			  <QuizBox />
			  <QuizBox />
			  <QuizBox />
            </Holder>
			</CardHolder>
			</Page>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(QuizTime);
