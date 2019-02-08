import { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';

import MajorAnswersForm from './MajorAnswersForm';
import MinorQuestionForm from './MinorQuestionForm';
import NewMinorQuestionForm from './NewMinorQuestionForm';

import { UPDATE_MAJOR_QUESTION } from '../../../mutations';
import { GET_QUIZ_QUERY } from '../../../queries';

import { Label, Container, TextArea, Form, Button } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ id, prompt, answers, minor_questions, pos, quiz_id }) => {
  const [updatedPrompt, setUpdatedPrompt] = useState(prompt);
  const [showNewMinor, setShowNewMinor] = useState(false);
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
      mutation={UPDATE_MAJOR_QUESTION}
      refetchQueries={() => [{ query: GET_QUIZ_QUERY, variables: { quiz_id } }]}
      onCompleted={() => {
        setToggleButton(false);
      }}
    >
      {(update_major_question, { error, loading, data }) => (
        <Box my={4}>
          <Flex flexDirection='column' justifyContent='space-between'>
            <Form
              onSubmit={async e => {
                e.preventDefault();
                update_major_question({
                  variables: { id, prompt: updatedPrompt },
                });
              }}
            >
              <Label htmlFor={`major-question-${id}`}>
                Major Question {pos}
              </Label>
              <TextArea
                id={`major-question-${id}`}
                onChange={handlePromptChange}
                value={updatedPrompt}
              />
              {toggleButton && (
                <Button my={3} variant='primary' type='submit'>
                  Update Prompt
                </Button>
              )}
            </Form>

            <MajorAnswersForm answers={answers} quiz_id={quiz_id} />

            <Container width={3 / 4}>
              {minor_questions.map((minor, minor_pos) => (
                <MinorQuestionForm
                  {...minor}
                  key={minor.id}
                  pos={minor_pos}
                  quiz_id={quiz_id}
                />
              ))}

              {showNewMinor || (
                <Button
                  mx={3}
                  variant='success'
                  onClick={() => setShowNewMinor(true)}
                >
                  Add Minor Question
                </Button>
              )}
              {showNewMinor && (
                <NewMinorQuestionForm
                  major_id={id}
                  quiz_id={quiz_id}
                  show={setShowNewMinor}
                />
              )}
            </Container>
          </Flex>
        </Box>
      )}
    </Mutation>
  );
};
