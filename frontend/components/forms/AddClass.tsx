import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Input, Button, Label, Text } from "../design-system";


class AddClass extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  generateMutation = () => {
      return(
        gql`
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
                }
            }
        }
    `)
}

  render() {
    return (
      <Mutation mutation={this.generateMutation()}>
        {(insert_class, { error, loading, data }) => (
        <>
          <Form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await insert_class();
              console.log(res);
            }}
          >
              <Label htmlFor="name">
                Add a Class
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Class Title"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Label>

              <Button variant = "primary" type="submit" p={3}>Submit</Button>
          </Form>
            {/* render errors, loading, or data */}
            {error && (<p> {error.message} </p>) }
            {loading && (<p> ...loading </p>) }
            {data && (<p> successfully created class with id of {data.insert_class.returning[0].id}</p>)}
          </>
        )}
      </Mutation>
    );
  }
}

export default AddClass;
