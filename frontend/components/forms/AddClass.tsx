import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class AddClass extends Component<{user_id: string}>{
  state = {
    name: '',
    user_id: this.props.user_id
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
                      name: "${this.state.name}",
                      user_id: "${this.state.user_id}"
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
          <form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await insert_class();
              console.log(res);
            }}
          >
            <fieldset>
              <label htmlFor="name">
                First Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Class Name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </form>
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
