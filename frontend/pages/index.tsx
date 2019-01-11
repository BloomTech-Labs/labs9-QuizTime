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
		{/* <Counter />
		<Button variant='primary' p={3}>
			Hello
		</Button>
		<Button variant='primary-outline' p={3}>
			World
		</Button>
		<Button variant='success' p={3}>
			Success
		</Button>
		<Button variant='error' p={3}>
			Error
		</Button> */}
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
