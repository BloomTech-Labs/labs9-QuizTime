import { useState } from "react";
import { Mutation } from "react-apollo";

import { Label, TextArea, Form, Button } from "../../design-system";
import { Box, Flex } from "@rebass/emotion";

import { UPDATE_QUIZ_DESCRIPTION } from "../../../mutations";
import { GET_QUIZ_QUERY } from '../../../queries';

export default ({ desc, quiz_id }) => {
  const [description, setDescription] = useState(desc);

  const handleChange = e => {
    setDescription(e.target.value);
  };

  return (
    <Mutation
      mutation={UPDATE_QUIZ_DESCRIPTION}
      refetchQueries={() => [{ query: GET_QUIZ_QUERY, variables: { quiz_id } }]}
    >
      {(update_quiz_description, { error, loading, data }) => (
        <Form
          onSubmit={async e => {
            e.preventDefault();
            update_quiz_description({ variables: { description, quiz_id } });
          }}
        >
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
          {desc !== description && (
            <Button my={3} variant="primary" type="submit">Update Description</Button>
          )}
        </Form>
      )}
    </Mutation>
  );
};
