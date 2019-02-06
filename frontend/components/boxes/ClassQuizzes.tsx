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
    $quiz_id: Int!
    $due_date: date!
  ) {
    update_class_quiz(
      where: {
        _and: [{ class_id: { _eq: $class_id } }, { quiz_id: { _eq: $quiz_id } }]
      },
      _set: { due_date: $due_date }
    ) {
      returning {
        id
        class_id
        quiz_id
        due_date
      }
    }
  }
`;

const ClassQuizzes: React.SFC = ({ quiz, classId, dueDate }) => {
  const [quizDate, setQuizDate] = useState(dueDate);

  const handleQuizDate = (date, id, update) => {
    const selectedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    console.log('selectedDate', selectedDate, quiz.id, classId);
    update({
      variables: {
        due_date: selectedDate,
        quiz_id: quiz.id,
        class_id: classId,
      },
    });
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
            <Mutation mutation={UPDATE_CLASS_QUIZ}>
              {(update_class_quiz, { error, loading, data }) => (
                <DatePicker 
                  selected={quizDate}
                  placeholderText='Assign email date'
                  onChange={date =>
                    handleQuizDate(date, quiz.id, update_class_quiz)
                  }
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
              )}
            </Mutation>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default ClassQuizzes;
