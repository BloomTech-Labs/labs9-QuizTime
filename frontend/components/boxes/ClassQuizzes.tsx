import * as React from 'react';
import { useState, useEffect } from 'react';
import { QuizBar, Text } from '../design-system/primitives';
import { Box, Flex } from '@rebass/emotion';
import DatePicker from 'react-datepicker';

const ClassQuizzes: React.SFC = ({ quiz, classId}) => {
  const [quizDate, setQuizDate] = useState(null);
  console.log('quiz', quiz, classId)
  // useEffect(()=> {
  //   const selectedDate = `${quizDate.getFullYear()}-${quizDate.getMonth()}-${quizDate.getDate()}`
  // })

  const handleQuizDate = (date, id) => {
    if (quizDate) {
      const selectedDate = `${quizDate.getFullYear()}-${quizDate.getMonth()}-${quizDate.getDate()}`
    }

    console.log('what does handle get?', date, quiz.id, classId)
    setQuizDate(date)
  }
  return (
    <>
      <Box>
        <Flex>
        <Text my={2}>{quiz.name}</Text>
        <DatePicker style={{maxWidth: '80px'}} selected={quizDate} placeholderText='Select quiz email date' onChange={(date) => handleQuizDate(date, quiz.id)} />
        </Flex>
      </Box>
    </>
  );
};
export default ClassQuizzes;
