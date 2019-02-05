import { useState } from 'react'
import { Mutation } from 'react-apollo';
import Reveal from 'react-reveal/Reveal';

import MinorAnswersForm from './MinorAnswersForm';

import { UPDATE_MINOR_QUESTION } from '../../../mutations';

import { Label, TextArea, Form } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ id, prompt, answers, pos }) => {
  const [updatedPrompt, setUpdatedPrompt] = useState(prompt);

  const handlePromptChange = e => {
    setUpdatedPrompt(e.target.value)
  }

  return(
    <Mutation mutation={UPDATE_MINOR_QUESTION}>
    {(update_minor_question, { error, loading, data }) => (
        <Box my={4}>
          <Form onSubmit={async e => {
            e.preventDefault();
            update_minor_questions({variables: {}})
          }}>
            <Flex justifyContent="space-between">
              <Label htmlFor={`minor-question-${id}`}>
                Minor Question {pos+1}
              </Label>
            </Flex>
            <TextArea
              id={`minor-question-${id}`}
              onChange={handlePromptChange}
              value={updatedPrompt}
            />
          </Form>
          <MinorAnswersForm answers={answers} />
        </Box>
    )}
    </Mutation>
  )
}
