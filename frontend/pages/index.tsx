import Link from "next/link";
import Counter from "../components/Counter";
import { Button } from "@rebass/emotion";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../components/Students/StudentBar";
import SideBar from "../components/sidebar/sidebar"; 
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
		<SideBar />
		<Query query={ALL_STUDENTS_QUERY}>
			{({ loading, error, data }) => {
				if (error) return <p>{error.message}</p>;
				if (loading) return <p>...loading</p>;
				if (data) {
					return data.student.map(student => <StudentBar student={student} />);
				}
			}}
		</Query>
	</div>
);
