import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import securePage from "../../hocs/securePage";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import QuizElement from "../../components/boxes/QuizElement";
import ClassQuizzes from "../../components/boxes/ClassQuizzes";
import { ALL_STUDENTS_QUERY } from "../../queries";
import { Box } from "@rebass/emotion";

import {
  StudentHolder,
  SectionContainer,
  Text,
  QuizBox,
  QuizzesAvaliable
} from "../../components/design-system/primitives";

const ClassPage = ({ query: { id } }) => {
  return (
    <Layout>
      <Box p={4}>
        <AddStudent class_id={id} />
      </Box>
      <Query query={ALL_STUDENTS_QUERY} variables={{ class_id: id }}>
        {({ loading, error, data }) => {
          if (error) return <p>{error.message}</p>;
          if (loading) return <p>...loading</p>;
          if (data) {
            return (
              <>
                <SectionContainer>
                  <StudentHolder>
                    {data.class[0].students.map(student => (
                      <StudentBar
                        id={student.id}
                        key={student.id}
                        student={student}
                      />
                    ))}
                  </StudentHolder>
                  <QuizBox>
                    {data.quiz
                      .filter(
                        qz =>
                          !data.class[0].quizzes.find(qzz => qzz.quiz.id === qz.id)
                      )
                      .map(q => (
                        <QuizElement
                          key={q.id}
                          quiz={q}
                          class_id={id}
                        />
                      ))}
                  </QuizBox>
                  <QuizzesAvaliable>
                    {data.class[0].quizzes.map(q => (
                      <ClassQuizzes key={q.id} quiz={q.quiz} />
                    ))}
                  </QuizzesAvaliable>
                </SectionContainer>
              </>
            );
          }
        }}
      </Query>
    </Layout>
  );
};

export default securePage(ClassPage);
