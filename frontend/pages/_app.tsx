import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
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
