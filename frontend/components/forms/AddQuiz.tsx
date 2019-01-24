import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  Form,
  Input,
  Button,
  Label,
  Text,
  TextArea,
  Container
} from "../design-system";
import { Box, Flex } from "@rebass/emotion";

class AddQuiz extends Component {
  state = {
    name: "",
    majorQuestions: [
      {
        id: 1,
        prompt: "",
        answers: [
          { id: 1, response: "", correct: false },
          { id: 2, response: "", correct: false },
          { id: 3, response: "", correct: false },
          { id: 4, response: "", correct: false }
        ],
        minorQuestions: []
      }
    ]
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleMajorAnswerChange = (e, id) => {
    const { majorQuestions } = this.state;
    const newQuestions = majorQuestions.map(q => {
      if (q.id == id) {
        if (e.target.type == "radio") {
          console.log("type is radio, mapping over answers");
          q.answers = q.answers.map(a => {
            if (a.id == e.target.value) {
              a.correct = true;
            } else {
              a.correct = false;
            }
            return a;
          });
        } else {
          q.answers = q.answers.map(a => {});
        }
      }
      return q;
    });

    console.log(e.target.type);
    console.log("MAJOR ANSWER CHANGE:", e.target.value);
    this.setState(
      s => ({ ...s, majorQuestions: newQuestions }),
      () => console.log(this.state)
    );
  };

  addMajorQuestion = e => {
    e.preventDefault();
    this.setState(s => ({
      ...s,
      majorQuestions: [
        ...s.majorQuestions,
        {
          id: s.majorQuestions[s.majorQuestions.length - 1]["id"] + 1,
          prompt: "",
          answers: [{ response: "", correct: false }],
          minorQuestions: []
        }
      ]
    }));
  };

  updateMajorQuestion = (id, e) => {
    console.log(`id ${id}:`, e.target.value);
    const { value } = e.target;
    const { majorQuestions } = this.state;
    const updatedQuestions = majorQuestions.map(q => {
      if (q.id == id) q.prompt = value;
      return q;
    });
    this.setState(s => ({ ...s, majorQuestions: updatedQuestions }));
  };

  deleteMajorQuestion = id => {
    const { majorQuestions } = this.state;
    const updatedQuestions = majorQuestions.filter(q => {
      if (q.id != id || q.id == 1) return q;
    });
    this.setState(s => ({ ...s, majorQuestions: updatedQuestions }));
  };

  addMinorQuestion = (e, majorQID) => {
    e.preventDefault();
    const { majorQuestions } = this.state;
    const newQuestions = majorQuestions.map(majorQuestion => {
      if (majorQuestion.id == majorQID) {
        if (majorQuestion.minorQuestions.length == 0) {
          majorQuestion.minorQuestions = majorQuestion.minorQuestions.concat({
            id: `${majorQID}a`,
            prompt: "",
            answers: [
              { id: 1, response: "", correct: false },
              { id: 2, response: "", correct: false },
              { id: 3, response: "", correct: false },
              { id: 4, response: "", correct: false }
            ]
          });
          return majorQuestion;
        } else {
          majorQuestion.minorQuestions = majorQuestion.minorQuestions.concat({
            id: `${majorQID}${String.fromCharCode(
              majorQuestion.minorQuestions[
                majorQuestion.minorQuestions.length - 1
              ]["id"].charCodeAt(1) + 1
            )}`,
            prompt: "",
            answers: [
              { id: 1, response: "", correct: false },
              { id: 2, response: "", correct: false },
              { id: 3, response: "", correct: false },
              { id: 4, response: "", correct: false }
            ]
          });
          return majorQuestion;
        }
      }
      return majorQuestion;
    });
    this.setState(s => ({ ...s, majorQuestions: newQuestions }));
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
    const { majorQuestions } = this.state;
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
                {majorQuestions.map(q => (
                  <Box key={q.id} my={4}>
                    <Flex justifyContent="space-around">
                      <Label htmlFor={`major-question-${q.id}`}>
                        Major Question {q.id}
                      </Label>
                      <Button
                        variant="error"
                        p={0}
                        fontSize={0}
                        onClick={e => this.deleteMajorQuestion(q.id)}
                      >
                        Delete
                      </Button>
                    </Flex>
                    <TextArea
                      id={`major-question-${q.id}`}
                      onChange={e => this.updateMajorQuestion(q.id, e)}
                    />
                    <Box>
                      <Label>Answer 1</Label>
                      <Flex>
                        <Input
                          my={3}
                          width={1 / 2}
                          name="major-answer-1"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                        <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="1"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                      </Flex>
                    </Box>
                    <Box>
                      <Label>Answer 2</Label>
                      <Flex>
                        <Input
                          my={3}
                          width={1 / 2}
                          name="major-answer-2"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                        <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="2"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                      </Flex>
                    </Box>
                    <Box>
                      <Label>Answer 3</Label>
                      <Flex>
                        <Input
                          my={3}
                          width={1 / 2}
                          name="major-answer-3"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                        <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="3"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                      </Flex>
                    </Box>
                    <Box>
                      <Label>Answer 4</Label>
                      <Flex>
                        <Input
                          my={3}
                          width={1 / 2}
                          name="major-answer-4"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                        <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="4"
                          onChange={e => this.handleMajorAnswerChange(e, q.id)}
                        />
                      </Flex>
                    </Box>
                    <Container width={3 / 4}>
                      {q.minorQuestions.map(minorQ => (
                        <Box>
                          <Text>{minorQ.id}</Text>
                          <TextArea />
                          <Input />
                          <Input />
                          <Input />
                          <Input />
                        </Box>
                      ))}
                    </Container>
                    <Flex justifyContent="center">
                      <Button variant="success" onClick={this.addMajorQuestion}>
                        Add Major Question
                      </Button>
                      <Button
                        variant="primary"
                        onClick={e => {
                          this.addMinorQuestion(e, q.id);
                        }}
                      >
                        Add Minor Question
                      </Button>
                    </Flex>
                  </Box>
                ))}
                <Button variant="primary" type="submit">
                  Submit
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
