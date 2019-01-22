import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Input, Button, Label, Text } from "../design-system";

class AddQuiz extends Component {
  state = {
    name: '',
    class_id: 0
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  generateMutation = () => {
    return(
      gql`
      mutation insert_quiz {
          insert_quiz(
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
    return(
        <Mutation mutation = {this.generateMutation()}>
        {(insert_quiz, { error, loading, data }) => (
            <>
            <Form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await insert_quiz();
              console.log(res);
            }}
            >
            <Text>Add a Quiz</Text>

            <fieldset>
            <Label htmlFor="name">
                Quiz Title
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Quiz Title"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Label>
              <Button variant = "primary" type="submit">Submit</Button>
            </fieldset>
          </Form>
            {/* render errors, loading, or data */}
            {error && (<p> {error.message} </p>) }
            {loading && (<p> ...loading </p>) }
            {data && (<p> successfully created quiz with id of {data.insert_quiz.returning[0].id}</p>)}
          </>
        )}
      </Mutation>
        );
    }
}

export default AddQuiz;