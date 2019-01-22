import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Form, Input, Button, Label, Text, TextArea } from "../design-system";

class AddQuiz extends Component {
  state = {
    name: "",
    questions: [
      { id: 1, prompt: "", answers: [{ response: "", correct: false }] }
    ]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addQuestion = e => {
    e.preventDefault();
    this.setState(s => ({
      ...s,
      questions: [
        ...s.questions,
        {
          id: s.questions[s.questions.length - 1]["id"] + 1,
          prompt: "",
          answers: [{ response: "", correct: false }]
        }
      ]
    }));
  };

  updateMajorQuestion = (id, e) => {
    console.log(`id ${id}:`, e.target.value);
    const { value } = e.target;
    const { questions } = this.state;
    const updatedQuestions = questions.map(q => {
      if (q.id == id) q.prompt = value;
      return q;
    });
    this.setState(s => ({ ...s, questions: updatedQuestions }));
  };

  generateMutation = () => {
    return gql`
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
  `;
  };

  render() {
    const { questions } = this.state;
    return (
      <Mutation mutation={this.generateMutation()}>
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
                {questions.map(q => (
                  <div key={q.id}>
                    <Label htmlFor={`major-question-${q.id}`}>
                      Major Question {q.id}
                    </Label>
                    <TextArea
                      id={`major-question-${q.id}`}
                      onChange={e => this.updateMajorQuestion(q.id, e)}
                    />
                  </div>
                ))}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="success" onClick={this.addQuestion}>
                  Add Major Question
                </Button>
              </fieldset>
            </Form>
            {/* render errors, loading, or data */}
            {error && <p> {error.message} </p>}
            {loading && <p> ...loading </p>}
            {data && (
              <p>
                {" "}
                successfully created quiz with id of{" "}
                {data.insert_quiz.returning[0].id}
              </p>
            )}
          </>
        )}
      </Mutation>
    );
  }
}

export default AddQuiz;
