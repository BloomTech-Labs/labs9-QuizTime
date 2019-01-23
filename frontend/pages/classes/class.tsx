import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import securePage from "../../hocs/securePage";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import {
  StudentHolder,
  SectionContainer,
  Text,
  QuizHolder
} from "../../components/design-system/primitives";

const ClassPage = ({ query: { title } }) => {
  // this.state ={
  //   average: 0, adding all of the students scores up and dividing by the number of students in class
  //   quizzesTaken: 0, tracks how many quizzes have been handed in
  //   connectedQuizzes: [], quizzes will be put into this array as they are connected to the specitic class
  // }
  const SINGLE_CLASS_QUERY = gql`
  query SINGLE_CLASS_QUERY {
    class{
      id
      name
    }
  }
  `
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
      <Text>Send Email</Text>
      
      <Text>Add a Student</Text>
      {/* <Query query={SINGLE_CLASS_QUERY}>
      {({loading, error, data}) => {
        if(error) return <p>{error.message}</p>;
        if(loading) return <p>...Loading</p>;
        if(data){
          return (
            <div>
            {data.class.map(classId => (
              <AddStudent
              id={classId.id}
              />
            ))}
            </div>
          )
        }
      }}
      <AddStudent />
      </Query> */}
      <AddStudent />
      <SectionContainer>
        <Query query={ALL_STUDENTS_QUERY}>
          {({ loading, error, data }) => {
            if (error) return <p>{error.message}</p>;
            if (loading) return <p>...loading</p>;
            if (data) {
              console.log(data);
              return (
                <StudentHolder>
                  {data.class[0].students.map(student => (
                    <StudentBar
                      id={student.id}
                      key={student.id}
                      student={student}
                    />
                  ))}
                </StudentHolder>
              );
            }
          }}
        </Query>
      </SectionContainer>
      <SectionContainer>
        <QuizHolder />
      </SectionContainer>
    </Layout>
  );
};
ClassPage.getInitialProps = async function(context) {
  const { title } = context.query;
  return { title };
};
export default securePage(ClassPage);
