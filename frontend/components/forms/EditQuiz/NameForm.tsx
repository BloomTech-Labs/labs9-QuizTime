import {useState } from 'react';
import { Mutation } from 'react-apollo';

//ADD MUTATION!!!
import { UPDATE_QUIZ_NAME } from '../../../mutations';

import { Label, Input, Form } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

export default ({ name, quiz_id }) => {
  const [cName, setName] = useState(name);

  const handleChange = e => {
    setName(e.target.value)
  }

  return(
    <Mutation mutation={UPDATE_QUIZ_NAME}>
      {(update_quiz_name, { error, loading, data }) => (
        <Box my={4}>
          <Form onSubmit={async e => {
            e.preventDefault();
            update_quiz_name({variables: {name: cName, quiz_id }})}}
          >
            <Label htmlFor="name">
              Add a Quiz
              <Box py={3}>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Quiz Title"
                required
                value={cName}
                onChange={handleChange}
              />
              </Box>
            </Label>
          </Form>
        </Box>
      )}
    </Mutation>
  )
}
