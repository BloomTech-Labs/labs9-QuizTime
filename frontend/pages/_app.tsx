import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { ApolloProvider } from "react-apollo";
import theme from "../utils/theme.ts";
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
}

export default withData(QuizTime);
