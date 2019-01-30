import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { INSERT_STUDENT } from "../../mutations";
import { ALL_STUDENTS_QUERY } from "../../queries";
import { Form, Input, Button, Label, Text } from "../design-system";

class AddStudent extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    class_id: this.props.class_id
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation
        mutation={INSERT_STUDENT}
        update={(cache, { data: insert_student }) => {
          const c = cache.readQuery({
            query: ALL_STUDENTS_QUERY,
            variables: { class_id: this.state.class_id }
          });

          const newClass = c.class;
          newClass[0].students = newClass[0].students.concat(insert_student.insert_student.returning)

          cache.writeQuery({
            query: ALL_STUDENTS_QUERY,
            data: {
              quiz: c.quiz,
              class: newClass
            }
          });
        }}
      >
        {(insert_student, { error, loading, data }) => (
          <>
            <Form
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                // call the mutation
                insert_student({ variables: { ...this.state } });
                this.setState({
                  firstName: "",
                  lastName: "",
                  email: ""
                });
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

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {/* render errors, loading, or data */}
            {error && <p> {error.message} </p>}
            {loading && <p> ...loading </p>}
          </>
        )}
      </Mutation>
    );
  }
}

export default AddStudent;
