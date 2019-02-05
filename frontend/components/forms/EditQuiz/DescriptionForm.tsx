import { useState } from 'react';
import { Mutation } from 'react-apollo';

import { Label, TextArea, Form } from '../../design-system';
import { Box, Flex } from '@rebass/emotion';

import { UPDATE_QUIZ_DESCRIPTION } from '../../../mutations';

export default ({ desc, quiz_id }) => {
  const [description, setDescription] = useState(desc);

  const handleChange = e => {
    setDescription(e.target.value);
  }

  return(
    <Mutation mutation={UPDATE_QUIZ_DESCRIPTION}>
      {(update_quiz_description, { error, loading, data}) => (
        <Form onSubmit={async e => {
          e.preventDefault();
          update_quiz_description({variables: { description, quiz_id }})
        }}>
          <Label htmlFor="desc">
            Description
            <Box py={3}>
            <TextArea
              type="text"
              id="desc"
              name="desc"
              required
              value={description}
              onChange={handleChange}
              css={{ height: "100px" }}
            />
             </Box>
          </Label>
        </Form>
      )}
    </Mutation>
  )
}
