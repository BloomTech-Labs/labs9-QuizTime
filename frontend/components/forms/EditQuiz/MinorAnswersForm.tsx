import { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';

import { UPDATE_MINOR_ANSWERS } from '../../../mutations';
import { GET_QUIZ_QUERY } from '../../../queries';

import { Label, Input, Form, Button } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ answers, quiz_id }) => {
  const [updatedAnswers, setUpdatedAnswers] = useState(answers);
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  useEffect(() => {
    if (JSON.stringify(answers) !== JSON.stringify(updatedAnswers)) {
      setShowUpdateButton(true);
    }
  }, [updatedAnswers]);

  const handleChange = (e, id) => {
    const newAnswers = updatedAnswers.map(answer => {
      if (e.target.type === 'radio') {
        if (id === answer.id) {
          return {
            ...answer,
            correct_answer: true,
          };
        } else {
          return {
            ...answer,
            correct_answer: false,
          };
        }
      } else {
        if (id === answer.id) {
          return {
            ...answer,
            response: e.target.value,
          };
        } else {
          return answer;
        }
      }
    });

    setUpdatedAnswers(newAnswers);
  };

  return (
    <Mutation
      mutation={UPDATE_MINOR_ANSWERS}
      refetchQueries={() => [{ query: GET_QUIZ_QUERY, variables: { quiz_id } }]}
      onCompleted={() => {
        setShowUpdateButton(false);
      }}
    >
      {(update_minor_answers, { error, loading, data }) => (
        <Form
          onSubmit={e => {
            e.preventDefault();
            update_minor_answers({
              variables: {
                idA: updatedAnswers[0].id,
                resA: updatedAnswers[0].response,
                correctA: updatedAnswers[0].correct_answer,
                idB: updatedAnswers[1].id,
                resB: updatedAnswers[1].response,
                correctB: updatedAnswers[1].correct_answer,
                idC: updatedAnswers[2].id,
                resC: updatedAnswers[2].response,
                correctC: updatedAnswers[2].correct_answer,
                idD: updatedAnswers[3].id,
                resD: updatedAnswers[3].response,
                correctD: updatedAnswers[3].correct_answer,
              },
            });
          }}
        >
          <Box>
            {updatedAnswers.map((answer, pos) => (
              <Box key={answer.id}>
                <Label>Answer {pos + 1}</Label>
                <Flex>
                  <Input
                    my={3}
                    width={1 / 2}
                    name={`minor-answer-${answer.id}`}
                    onChange={e => handleChange(e, answer.id)}
                    value={answer.response}
                  />
                  <Input
                    type='radio'
                    name={`${answer.id}`}
                    onChange={e => handleChange(e, answer.id)}
                    checked={answer.correct_answer}
                  />
                </Flex>
              </Box>
            ))}
          </Box>
          {showUpdateButton && (
            <Button my={3} variant='primary' type='submit'>
              Update Answers
            </Button>
          )}
        </Form>
      )}
    </Mutation>
  );
};
