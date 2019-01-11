import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../components/Students/StudentBar";
const ALL_STUDENTS_QUERY = gql`
	query ALL_QUIZZES_QUERY {
		quiz{
			id
			name
		}
	}
`;

export default () => (
	<div>
		<Query query={ALL_STUDENTS_QUERY}>
			{({ loading, error, data }) => {
				if (error) return <p>{error.message}</p>;
				if (loading) return <p>...loading</p>;
				if (data) {
					return data.quiz.map(quiz => <StudentBar quiz={quiz} />);
				}
			}}
		</Query>
	</div>
);
