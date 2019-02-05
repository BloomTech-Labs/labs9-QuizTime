import { useState } from 'react';
import { Mutation } from 'react-apollo';

import MajorAnswersForm from './MajorAnswersForm';
import MinorQuestionForm from './MinorQuestionForm';
import NewMinorQuestionForm from './NewMinorQuestionForm';

import { UPDATE_MAJOR_QUESTION } from '../../../mutations';

import { Label, Container, TextArea, Form, Button } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ id, prompt, answers, minor_questions, pos }) => {
  const [updatedPrompt, setUpdatedPrompt] = useState(prompt);
  const [showNewMinor, setShowNewMinor] = useState(false);

  const handlePromptChange = e => {
    setUpdatedPrompt(e.target.value)
  }

  return(
    <Mutation mutation={UPDATE_MAJOR_QUESTION}>
      {(update_major_question, { error, loading, data }) => (
          <Box my={4}>
            <Flex justifyContent="space-between">
              <Form onSubmit={async e => {
                  e.preventDefault();
                  update_major_question({variables: {}})
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
              </Form>

              <MajorAnswersForm answers={answers} />

              <Container width={3/4}>
                {minor_questions.map((minor, minor_pos) => (
                  <MinorQuestionForm {...minor} key={minor.id} pos={minor_pos} />
                ))}

                {showNewMinor || (
                  <Button
                    mx={3}
                    variant="success"
                    onClick={() => setShowNewMinor(true)}
                  >
                    Add Minor Question
                  </Button>
                )}
                {showNewMinor && <NewMinorQuestionForm major_id={id}/>}
              </Container>
            </Flex>
          </Box>
      )}
    </Mutation>
  )
}
