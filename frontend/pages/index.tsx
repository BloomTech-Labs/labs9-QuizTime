import Link from "next/link";
import Counter from "../components/Counter";
<<<<<<< HEAD
=======
import { Button } from "@rebass/emotion";
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

>>>>>>> bd4f8655d5cad65818add7b5b4d47c18d335e678
export default () => (
	<div>
		<Link href='/quizzes' prefetch>
			<a>quizzes</a>
		</Link>
		<Link href='/classes' prefetch>
			<a>classes</a>
		</Link>
		<Link href='/billing' prefetch>
			<a>billing</a>
		</Link>
		<Link href='/settings' prefetch>
			<a>settings</a>
		</Link>
		<Counter />
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
		</Button>
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
