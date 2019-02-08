import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { QuizBar, Text, ButtonLink } from '../design-system/primitives';
import { Box, Flex } from '@rebass/emotion';
import DatePicker from 'react-datepicker';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { UPDATE_CLASS_QUIZ } from '../../mutations';

const ClassQuizzes: React.SFC = ({ quiz, classId, dueDate }) => {
  const [quizDate, setQuizDate] = useState(null);
  useEffect(()=> {
    if(dueDate){
      setQuizDate(new Date(dueDate))
    }
  }, [])

  const handleQuizDate = (date, id, update) => {
    //* Weird ... month begins at 0 ... so + 1 ... hack
    const selectedDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
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
        <Flex
          justifyContent='space-between'
          alignItems='center'
          flexDirection='row'
        >
          <Box mr={4} my={2}>
            <Text>{quiz.name}: </Text>
          </Box>
          <Box>
            <Mutation mutation={UPDATE_CLASS_QUIZ}>
              {(update_class_quiz, { error, loading, data }) => (
                <DatePicker
                  customInput={<CustomInput />}
                  selected={quizDate}
                  onChange={date =>
                    handleQuizDate(date, quiz.id, update_class_quiz)
                  }
                  popperPlacement='bottom'
                  popperModifiers={{
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

class CustomInput extends React.Component {
  render() {
    return (
      <ButtonLink
        style={{ padding: '2px 5px' }}
        fontSize={'12px'}
        fontWeight={'600'}
        onClick={this.props.onClick}
      >
        {this.props.value || 'Assign'}
      </ButtonLink>
    );
  }
}
