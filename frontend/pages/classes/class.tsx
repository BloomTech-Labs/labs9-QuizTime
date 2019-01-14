import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentsList from "../../components/Students/StudentsList";
import StudentBar from "../../components/Students/StudentBar";

const ALL_STUDENTS_QUERY = gql`
  query ALL_STUDENTS_QUERY {
    student {
      id
      last_name
      first_name
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
                    return (
                        <StudentsList>
                            {data.student.map(s => (
                                <StudentBar id={s.id} student={s} />
                            ))}
                        </StudentsList>
                    );
                }
            }}
        </Query>
    </div>
);