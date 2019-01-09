import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import theme from "../utils/theme";
class QuizTime extends App {
	render() {
		const { Component } = this.props;
		return (
			<Container>
				<ThemeProvider theme={theme}>
					<Component />
				</ThemeProvider>
			</Container>
		);
	}
}

export default QuizTime;
