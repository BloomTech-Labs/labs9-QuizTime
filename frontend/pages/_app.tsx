import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
<<<<<<< HEAD
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
=======
import { ApolloProvider } from "react-apollo";
import theme from "../utils/theme";
import withData from "../utils/withData";

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
						<Component />
					</ThemeProvider>
				</ApolloProvider>
			</Container>
		);
	}
>>>>>>> 1f2baebc1e2b09be015ecc9c4e47be4a5b9e2ede
}

export default withData(QuizTime);
