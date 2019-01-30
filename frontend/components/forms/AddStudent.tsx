import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Input, Button, Label, Text, HeaderText} from "../design-system";

class AddStudent extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    classId: this.props.class
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  generateMutation = () => {
      return(
        gql`
        mutation insert_student {
            insert_student(
            objects:[
                    {
                      first_name: "${this.state.firstName}",
                      last_name: "${this.state.lastName}",
                      email: "${this.state.email}",
                      class_id: ${this.state.classId}
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
        {(insert_student, { error, loading, data }) => (
        <>
        <HeaderText>Add a New Student to Class</HeaderText>
          <Form p={4}
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await insert_student();
              console.log(res);
            }}
          >
              <Label htmlFor="firstName">
                First Name
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Label>

              <Label htmlFor="lastName">
                Last Name
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Label>

              <Label htmlFor="email">
                Email
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Label>

              <Button variant="primary" type="submit">Submit</Button>
          </Form>
            {/* render errors, loading, or data */}
            {error && (<p> {error.message} </p>) }
            {loading && (<p> ...loading </p>) }
            {data && (<p> successfully created student with id of {data.insert_student.returning[0].id}</p>)}
          </>
        )}
      </Mutation>
    );
  }
}

export default AddStudent;
