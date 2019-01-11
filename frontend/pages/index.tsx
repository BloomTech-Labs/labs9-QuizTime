import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../components/Students/StudentBar";

const ALL_STUDENTS_QUERY = gql`
	query ALL_STUDENTS_QUERY {
		student {
			id
			first_name
			last_name
			email
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
					return data.student.map(s => <StudentBar id={s.id} student={s} />);
				}
			}}
		</Query>
	</div>
);
