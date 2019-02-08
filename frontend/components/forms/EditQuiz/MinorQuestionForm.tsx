import { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import Reveal from 'react-reveal/Reveal';

import MinorAnswersForm from './MinorAnswersForm';

import { UPDATE_MINOR_QUESTION } from '../../../mutations';
import { GET_QUIZ_QUERY } from '../../../queries';

import { Label, TextArea, Form, Button } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ id, prompt, answers, pos, quiz_id }) => {
  const [updatedPrompt, setUpdatedPrompt] = useState(prompt);
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    if (prompt !== updatedPrompt) {
      setToggleButton(true);
    }
  }, [updatedPrompt]);

  const handlePromptChange = e => {
    setUpdatedPrompt(e.target.value);
  };

  return (
    <Mutation
      mutation={UPDATE_MINOR_QUESTION}
      refetchQueries={() => [{ query: GET_QUIZ_QUERY, variables: { quiz_id } }]}
      onCompleted={() => {
        setToggleButton(false);
      }}
    >
      {(update_minor_question, { error, loading, data }) => (
        <Box my={4}>
          <Form
            onSubmit={async e => {
              e.preventDefault();
              update_minor_question({
                variables: { id, prompt: updatedPrompt },
              });
            }}
          >
            <Flex justifyContent='space-between'>
              <Label htmlFor={`minor-question-${id}`}>
                Minor Question {pos + 1}
              </Label>
            </Flex>
            <TextArea
              id={`minor-question-${id}`}
              onChange={handlePromptChange}
              value={updatedPrompt}
            />
            {toggleButton && (
              <Button my={3} variant='primary' type='submit'>
                Update Prompt
              </Button>
            )}
          </Form>
          <MinorAnswersForm answers={answers} quiz_id={quiz_id} />
        </Box>
      )}
    </Mutation>
  );
};
