import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Form, Input, Button, Label, Text } from "../design-system";
import { Flex, Box } from "@rebass/emotion";
import { ALL_CLASSES_QUERY } from "../../queries";

class AddClass extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  generateMutation = () => {
    return gql`
        mutation insert_class {
            insert_class(
            objects:[
                    {
                      name: "${this.state.name}"
                    }
                ]
                ){
                returning{
                    id
                    name
                }
            }
        }
    `;
  };

  render() {
    return (
      <Mutation
        mutation={this.generateMutation()}
        update={(cache, { data: insert_class }) => {
          //rename during destructure, class reserved keyword
          const { class: classes } = cache.readQuery({
            query: ALL_CLASSES_QUERY
          });
          cache.writeQuery({
            query: ALL_CLASSES_QUERY,
            data: { class: classes.concat(insert_class.insert_class.returning) }
          });
        }}
      >
        {(insert_class, { error, loading, data }) => (
          <Box px={3}>
            <Form
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                // call the mutation
                const res = await insert_class();
              }}
            >
              <Label my={3} htmlFor="name">
                Add a Class
                <Input
                  my={3}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Class Title"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Label>
              <Flex justifyContent="flex-end">
                <Button my={3} variant="primary" type="submit" p={3}>
                  Submit
                </Button>
              </Flex>
            </Form>
            {/* render errors, loading, or data */}
            {error && (
              <p>
                An error occurred attempting to add a class. Check that you have
                enough credits (100 credits) and try again.
              </p>
            )}
            {loading && <p> ...loading </p>}
          </Box>
        )}
      </Mutation>
    );
  }
}

export default AddClass;
