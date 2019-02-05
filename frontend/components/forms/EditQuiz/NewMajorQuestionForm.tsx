import { useState } from 'react';
import { Mutation } from 'react-apollo';
import Reveal from 'react-reveal/Reveal';

import { INSERT_MAJOR_QUESTION } from '../../../mutations';

import { Label, TextArea, Input, Form } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ quiz_id }) => {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState([
    {temp: 1, response: "", correct_answer: false},
    {temp: 2, response: "", correct_answer: false},
    {temp: 3, response: "", correct_answer: false},
    {temp: 4, response: "", correct_answer: false},
  ]);

  const handlePromptChange = e => {
    setPrompt(e.target.value)
  }

  const handleAnswerChange = (e, temp) => {
    const newAnswers = answers.map(answer => {
      if(e.target.type === "radio") {
        if(temp === answer.temp) {
          return {
            ...answer,
            correct_answer: true
          }
        }else{
          return {
            ...answer,
            correct_answer: false
          }
        }
      }else{
        if(temp === answer.temp){
          return {
            ...answer,
            response: e.target.value
          }
        }else{
          return answer
        }
      }
    });

    setAnswers(newAnswers);
  }

  const formatQuestion = () => {

  }

  return(
    <Mutation mutation={INSERT_MAJOR_QUESTION}>
      {(insert_major_question, { error, loading, data }) => (
        <Reveal effectIn="fadeInClear" effectOut="fadeOutClear">
          <Form onSubmit={async e => {
            e.preventDefault();
            insert_major_question({variables: {}})
          }}>
            <Box my={4}>
              <Flex justifyContent="space-between">
                <Label htmlFor="New Major Question">New Major Question</Label>
              </Flex>
              <TextArea
                id="New Major Question"
                onChange={handlePromptChange}
                value={prompt}
                placeholder="New question prompt..."
              />
              <Box m={3}>
              {answers.map(answer => (
                <Box>
                  <Label>Answer {answer.temp}</Label>
                  <Flex>
                    <Input
                      my={3}
                      width={1/2}
                      name={`new-major-answer-${answer.temp}`}
                      onChange={e => handleAnswerChange(e, answer.temp)}
                      value={answer.response}
                    />
                    <Input
                      type="radio"
                      name={`new-major-radio-answer-${answer.temp}`}
                      onChange={e => handleAnswerChange(e, answer.temp)}
                      checked={answer.correct_answer}
                    />
                  </Flex>
                </Box>
              ))}
              </Box>
            </Box>
          </Form>
        </Reveal>
      )}
    </Mutation>
  )
}
