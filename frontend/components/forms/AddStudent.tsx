import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_STUDENT_MUTATION = gql`
  mutation ADD_STUDENT_MUTATION(
    $firstName: String!
    $lastName: String!
    $email: String!
    $classId: Int!
  ) {
    insert_student(
      firstName: $firstName
      lastName: $lastName
      email: $email
      classId: $classId
    ) {
      id
    }
  }
`;

class AddStudent extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={ADD_STUDENT_MUTATION} 
      variables={this.state}>
        {(insert_student) => (
          <form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await insert_student();
              console.log(res);
            }}
          >
            <fieldset>
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="lastName">
                Last Name
                <input
                  type="textr"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="email">
                Email
                <textarea
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default AddStudent;
export { ADD_STUDENT_MUTATION };