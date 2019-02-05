import { useState } from 'react';
import { Mutation } from 'react-apollo';
import Reveal from 'react-reveal/Reveal';

import MajorAnswersForm from './MajorAnswersForm';
import MinorQuestionForm from './MinorQuestionForm';

import { UPDATE_MAJOR_QUESTION } from '../../../mutations';

import { Label, Container, TextArea, Form } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ id, prompt, answers, minor_questions, pos }) => {
  const [updatedPrompt, setUpdatedPrompt] = useState(prompt);

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
              </Container>
            </Flex>
          </Box>
      )}
    </Mutation>
  )
}
