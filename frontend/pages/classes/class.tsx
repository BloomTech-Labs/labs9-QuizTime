import { Query } from "react-apollo";
import { useState } from "react";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import securePage from "../../hocs/securePage";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import QuizElement from "../../components/boxes/QuizElement";
import {
  StudentHolder,
  SectionContainer,
  Text,
  QuizHolder,
  QuizBox,
  QuizzesAvaliable
} from "../../components/design-system/primitives";
import { Component } from "../../node_modules/@types/react";

const ClassPage = ({ query: { title } }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [average, setAverage] = useState(0);
  const [students, setStudents] = useState(0);

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

const ALL_QUIZZES_QUERY = gql`
query ALL_QUIZZES_QUERY {
  quiz {
    id
    name
  }
}
`;
  return (
    <Layout>
      <Text>Send Email</Text>

      <Text>Add a Student</Text>

      <AddStudent class={title} />
      <SectionContainer>
        <Query query={ALL_STUDENTS_QUERY}>
          {({ loading, error, data }) => {
            if (error) return <p>{error.message}</p>;
            if (loading) return <p>...loading</p>;
            if (data) {
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
        <QuizBox>
          <Query query={ALL_QUIZZES_QUERY}>
            {({ loading, error, data }) => {
              if (error) return <p>{error.message}</p>;
              if (loading) return <p>...loading</p>;
              if (data) {
                console.log(data);
                return data.quiz.map(q =>  <QuizElement key={q.id} quiz={q} />);
              }
            }}
          </Query>
        </QuizBox>
        <QuizzesAvaliable />
      </SectionContainer>
    </Layout>
  );
};
ClassPage.getInitialProps = async function(context) {
  const { title } = context.query;
  return { title };
};
export default securePage(ClassPage);
