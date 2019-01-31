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
  QuizzesAvaliable,
  UpperCase,
  Label
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
              // page content containers
              <Box p={3} m={3}>
              <Flex>
                <Box p={3} m={3} css={{boxShadow: "0px 3px 15px rgba(0,0,0,0.2)" }}>
                  <AddStudent class_id={id} />
                </Box>
              {/* container for right side */}
              <Box p={2} m={3} width={[1,1,1]} css={{boxShadow: "0px 3px 15px rgba(0,0,0,0.2)" }}> 
                <Flex
                    flexDirection="column"
                  >
                    <Box p={2}>
                      <Label m={2} >Class List</Label>

                      {data.class[0].students.map(student => (
                        <StudentBar
                          id={student.id}
                          key={student.id}
                          student={student}
                        />
                      ))}
                    </Box>
                    {/* container for quiz information */}
                      <Box>
                        <Flex>
                          {/*quizzes you can use*/}
                          <Box p={3} m={3} width={[1/2]} 
                          css={{ background: "white", height:"200px"}}>
                            <UpperCase fontSize={2} fontWeight={4}>Select a quiz to add</UpperCase>
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
                          </Box>
                          {/* quizzes added */}
                          <Box p={3} m={3} width={[1/2]} 
                          css={{ background: "white", height:"200px"}}>
                          <UpperCase fontSize={2} fontWeight={4}>Quizzes in class</UpperCase>
                            <Box py={3}>
                              {data.class[0].quizzes.map(q => (
                                <ClassQuizzes key={q.id} quiz={q.quiz} />
                              ))}
                              </Box>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            );
          }
        }}
      </Query>
    </Layout>
  );
};

export default securePage(ClassPage);
