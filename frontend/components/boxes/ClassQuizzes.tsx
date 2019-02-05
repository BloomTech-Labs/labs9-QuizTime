import * as React from 'react';
import { useState, useEffect } from 'react';
import { QuizBar, Text } from '../design-system/primitives';
import { Box, Flex } from '@rebass/emotion';
import DatePicker from 'react-datepicker';

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
        <Flex justifyContent='space-between'>
          <Box my={2}>
            <Text>
              {quiz.name}
            </Text>
          </Box>
          <Box my={2}>
            <DatePicker
              selected={quizDate}
              placeholderText='Assign email date'
              onChange={date => handleQuizDate(date, quiz.id)}
              popperPlacement='bottom-start'
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default ClassQuizzes;
