import * as React from 'react';
import { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import StudentBar from '../../components/Students/StudentBar';
import securePage from '../../hocs/securePage';
import Layout from '../../components/Layout';
import AddStudent from '../../components/forms/AddStudent';
import QuizElement from '../../components/boxes/QuizElement';
import StudentBox from '../../components/boxes/studentBox/studentBox';
import ClassQuizzes from '../../components/boxes/ClassQuizzes';
import { ALL_STUDENTS_QUERY } from '../../queries';
import styled from '@emotion/styled';
import { Box, Flex } from '@rebass/emotion';
import AddBox from '../../components/boxes/addBox/addBox';
import ReactLoading from 'react-loading';
import { css } from '@emotion/core';
import Modal from '../../components/Modal/index';

import {
  StudentHolder,
  SectionContainer,
  Text,
  QuizBox,
  QuizzesAvaliable,
  FlexChange,
  FlexCenter,
  UpperCase,
  Label,
} from '../../components/design-system/primitives';

const ATag = styled.a`
  text-decoration: none;
`;

const ClassPage = ({ query: { id } }) => {
  // class ClassPage extends Component {

  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Layout>
      <Box>
        <Query query={ALL_STUDENTS_QUERY} variables={{ class_id: id }}>
          {({ loading, error, data }) => {
            if (error) return <p>{error.message}</p>;
            if (loading) {
              return (
                <Flex justifyContent='center' alignItems='center' p={5} m={3}>
                  <ReactLoading
                    type='spin'
                    color='lightgray'
                    height='100px'
                    width='100px'
                  />
                </Flex>
              );
            }
            if (data) {
              return (
                // page content containers
                <Box mx={5} my={4}>
                  <Flex>
                    <FlexChange>
                      {/* container for left side */}
                      <Box>
                        <Flex flexDirection='column'>
                          {/* <Box p={3} m={3}>
                        <AddStudent class_id={id} />
                      </Box> */}
                          <Box>
                            <Label p={3}>Students</Label>
                            <Flex flexWrap='wrap'>
                              <Box onClick={toggleHidden}>
                                <ATag>
                                  <AddBox />
                                </ATag>
                              </Box>
                              {!isHidden && (
                                <Modal>
                                  <Flex>
                                    <AddStudent class_id={id} />
                                    <Box>
                                      <UpperCase
                                        color='blue.1'
                                        fontWeight={6}
                                        fontSize={2}
                                        css={{ cursor: 'pointer' }}
                                        onClick={toggleHidden}
                                      >
                                        x
                                      </UpperCase>
                                    </Box>
                                  </Flex>
                                </Modal>
                              )}
                              {data.class[0].students.map(student => (
                                <StudentBox
                                  id={student.id}
                                  key={student.id}
                                  student={student}
                                />
                              ))}
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box>
                        <Label p={3}>Quizzes</Label>
                        <Flex flexDirection='column'>
                          {/*quizzes you can use*/}
                          <Box
                            m={3}
                            p={2}
                            css={{
                              background: 'white',
                              boxShadow: '0px 3px 15px rgba(0,0,0,0.1)',
                            }}
                          >
                            <Box mb={2}>
                              <UpperCase fontSize={2} fontWeight={4}>
                                Add Quiz to Class
                              </UpperCase>
                            </Box>
                            <hr/>
                            {data.quiz
                              .filter(
                                qz =>
                                  !data.class[0].quizzes.find(
                                    qzz => qzz.quiz.id === qz.id
                                  )
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
                          <Box
                            m={3}
                            p={2}
                            css={{
                              background: 'white',
                              boxShadow: '0px 3px 15px rgba(0,0,0,0.1)',
                            }}
                          >
                            <Box mb={2}>
                              <UpperCase fontSize={2} fontWeight={4}>
                                Quizzes in class
                              </UpperCase>
                            </Box>
                            <hr/>
                            <Box>
                              {data.class[0].quizzes.map(q => (
                                <ClassQuizzes
                                  key={q.id}
                                  quiz={q.quiz}
                                  classId={Number(id)}
                                  dueDate={q.due_date}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    </FlexChange>
                  </Flex>
                </Box>
              );
            }
          }}
        </Query>
      </Box>
    </Layout>
  );
  //};
};

export default securePage(ClassPage);
