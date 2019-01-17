import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// const ADD_STUDENT_MUTATION = gql`
// mutation insert_student {
//     insert_student(
//       objects:[
//         {
//           first_name: this.state.firstName,
//           last_name: this.state.lastName,
//           email: this.state.email,
//           class_id: 1,
//         }
//       ]
//     ){
//       returning{
//         id
//       }
//     }
//   }
// `;

class AddStudent extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    classId: 0
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
                  type="text"
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
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="class">
                Class
                <input
                  type="number"
                  id="classId"
                  name="classId"
                  placeholder="Class Id"
                  required
                  value={this.state.classId}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
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
