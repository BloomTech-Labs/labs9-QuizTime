import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentsList from "../../components/Students/StudentsList";
import StudentBar from "../../components/Students/StudentBar";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";

const ClassPage = ({title}) => {
    const ALL_STUDENTS_QUERY = gql`
  query ALL_STUDENTS_QUERY {
    class (where: {id: {_eq: ${title}}}){
      id
      students {
        id
        class_id
        last_name
        first_name
        email
      }
    }
  }
`;

  return (
  <Layout>
    <AddStudent />
  <div>
    <Query query={ALL_STUDENTS_QUERY}>
      {({ loading, error, data }) => {
        if (error) return <p>{error.message}</p>;
        if (loading) return <p>...loading</p>;
        if (data) {
          console.log(data);
          return (
            <StudentsList>
              {data.class[0].students.map(student => (
                                <StudentBar id={student.id} student={student} />
                            ))}
            </StudentsList>
          );
        }
      }}
    </Query>
  </div>
  </Layout>
  )
};
ClassPage.getInitialProps = async function(context) {
  const { title } = context.query;
  return { title };
};
export default ClassPage;
