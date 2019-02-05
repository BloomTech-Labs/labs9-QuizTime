import { useState } from 'react';
import { Mutation } from 'react-apollo';

import { UPDATE_MINOR_ANSWERS } from '../../../mutations';

import { Label, Input, Form } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ answers }) => {

  const [updatedAnswers, setUpdatedAnswers] = useState(answers);

  const handleChange = (e, id) => {
    const newAnswers = updatedAnswers.map(answer => {
      if(e.target.type === "radio") {
        if(id === answer.id){
          return {
            ...answer,
            correct_answer: true
          }
        }else{
          return{
            ...answer,
            correct_answer: false
          }
        }
      }else{
        if(id === answer.id){
          return {
            ...answer,
            response: e.target.value
          }
        }else{
          return answer
        }
      }
    });

    setUpdatedAnswers(newAnswers);
  }

  return(
    <Mutation mutation={UPDATE_MINOR_ANSWERS}>
      {(update_minor_answers, { error, loading, data }) => (
        <Form onSubmit={e => {
          e.preventDefault();
          update_minor_answers({variables: {}})
        }}>
          <Box>
            {updatedAnswers.map((answer, pos) => (
              <Box key={answer.id}>
                <Label>Answer {pos+1}</Label>
                <Flex>
                  <Input
                    my={3}
                    width={1/2}
                    name={`minor-answer-${answer.id}`}
                    onChange={e=>handleChange(e, answer.id)}
                    value={answer.response}
                  />
                  <Input
                    type="radio"
                    name={`${answer.id}`}
                    onChange={e => handleChange(e, answer.id)}
                    checked={answer.correct_answer}
                  />
                </Flex>
              </Box>
            ))}
          </Box>
        </Form>
      )}
    </Mutation>
  )
}
