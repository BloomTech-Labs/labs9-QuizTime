import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import securePage from "../../hocs/securePage";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import QuizElement from "../../components/boxes/QuizElement";
import ClassQuizzes from "../../components/boxes/ClassQuizzes";
import { ALL_STUDENTS_QUERY } from "../../queries";
import { Box, Flex } from "@rebass/emotion";

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
      <Query query={ALL_STUDENTS_QUERY} variables={{ class_id: id }}>
        {({ loading, error, data }) => {
          if (error) return <p>{error.message}</p>;
          if (loading) return <p>...loading</p>;
          if (data) {
            return (
              <>
              <Box py={3}>
              <Flex
                flexDirection = "row"
                alignItems="center"
                justifyContent="left"
              >
                <Box p={5}>
                <AddStudent class_id={id} />
                </Box>
                  <StudentHolder p={3} m={4}>
                    {data.class[0].students.map(student => (
                      <StudentBar m={2}
                        id={student.id}
                        key={student.id}
                        student={student}
                      />
                    ))}
                  </StudentHolder>
                  </Flex>
                  </Box>
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
              </>
            );
          }
        }}
      </Query>
    </Layout>
  );
};

export default securePage(ClassPage);
