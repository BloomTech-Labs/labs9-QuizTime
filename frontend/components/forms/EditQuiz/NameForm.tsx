import { useState } from "react";
import { Mutation } from "react-apollo";

//ADD MUTATION!!!
import { UPDATE_QUIZ_NAME } from "../../../mutations";
import { GET_QUIZ_QUERY } from "../../../queries";

import { Label, Input, Form, Button } from "../../design-system";
import { Box, Flex } from "@rebass/emotion";

export default ({ name, quiz_id }) => {
  const [cName, setName] = useState(name);

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <Mutation
      mutation={UPDATE_QUIZ_NAME}
      refetchQueries={() => [{ query: GET_QUIZ_QUERY, variables: { quiz_id } }]}
    >
      {(update_quiz_name, { error, loading, data }) => (
        <Box my={4}>
          <Form
            onSubmit={async e => {
              e.preventDefault();
              update_quiz_name({ variables: { quiz_id, name: cName } });
            }}
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
            {name !== cName && (
              <Button my={3} variant="primary" type="submit">Update Name</Button>
            )}
          </Form>
        </Box>
      )}
    </Mutation>
  );
};
