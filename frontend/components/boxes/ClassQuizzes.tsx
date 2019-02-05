import * as React from 'react';
import { useState, useEffect } from 'react';
import { QuizBar, Text } from '../design-system/primitives';
import { Box, Flex } from '@rebass/emotion';
import DatePicker from 'react-datepicker';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const UPDATE_CLASS_QUIZ = gql`
  mutation update_class_quiz(
    $class_id: Int!
    $student_id: Int!
    $date: String!
  ) {
    update_class_quiz(
      where: {
        _and: [{ class_id: { _eq: $class_id } }, { quiz_id: { _eq: $quiz_id } }]
      }
      _set: { date: $date }
    ) {
      returning {
        id
        class_id
        quiz_id
        date
      }
    }
  }
`;

const ClassQuizzes: React.SFC = ({ quiz, classId }) => {
  const [quizDate, setQuizDate] = useState(null);

  // useEffect(()=> {

  // })

  const handleQuizDate = (date, id) => {
    if (quizDate) {
      const selectedDate = `${quizDate.getFullYear()}-${quizDate.getMonth()}-${quizDate.getDate()}`;
    }

    // console.log('what does handle get?', date, quiz.id, classId)
    setQuizDate(date);
  };
  
  return (
    <>
      <Box>
        <Flex justifyContent='space-between' flexDirection='column'>
          <Box my={2}>
            <Text>{quiz.name}:</Text>
          </Box>
          <Box my={2} alignSelf='center'>
            <DatePicker
              selected={quizDate}
              placeholderText='Assign email date'
              onChange={date => handleQuizDate(date, quiz.id)}
              popperPlacement='bottom'
              popperModifiers={{
                flip: {
                  enabled: false,
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                },
              }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default ClassQuizzes;
