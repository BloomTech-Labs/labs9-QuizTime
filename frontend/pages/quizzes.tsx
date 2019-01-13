import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import QuizBox from "../components/boxes/quizBox/quizBox";

const ALL_QUIZZES_QUERY = gql`
	query ALL_QUIZZES_QUERY {
		quiz {
			id
			name
		}
	}
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

export default () => (
	<CardHolder>
		<Holder>
			<Query query={ALL_QUIZZES_QUERY}>
				{({ loading, error, data }) => {
					if (error) return <p>{error.message}</p>;
					if (loading) return <p>...loading</p>;
					if (data) {
						return data.quiz.map(quiz => <QuizBox quiz={quiz} />);
					}
				}}
			</Query>
		</Holder>
	</CardHolder>
);