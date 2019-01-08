import App, { Container } from "next/app";

class QuizTime extends App {
	render() {
		const { Component } = this.props;
		return (
			<Container>
				<h1>Quizzer</h1>
				<Component />
			</Container>
		);
	}
}

export default QuizTime;
