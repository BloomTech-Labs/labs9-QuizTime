import { useState, useEffect } from "react";
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

function AddQuiz() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [majorQuestions, setMajorQuestions] = useState([
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
  ]);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log("TARGET: ", name, value);
  };

  const handleMajorAnswerChange = (e, id) => {
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
    setMajorQuestions(newQuestions);
  };

  const addMajorQuestion = e => {
    e.preventDefault();
    setMajorQuestions([
      ...majorQuestions,
      {
        id: majorQuestions[majorQuestions.length - 1]["id"] + 1,
        prompt: "",
        answers: [{ response: "", correct: false }],
        minorQuestions: []
      }
    ]);
  };

  const updateMajorQuestion = (id, e) => {
    console.log(`id ${id}:`, e.target.value);
    const { value } = e.target;
    const updatedQuestions = majorQuestions.map(q => {
      if (q.id == id) q.prompt = value;
      return q;
    });
    setMajorQuestions(updatedQuestions);
  };

  const deleteMajorQuestion = id => {
    const updatedQuestions = majorQuestions.filter(q => {
      if (q.id != id || q.id == 1) return q;
    });
    setMajorQuestions(updatedQuestions);
  };

  const addMinorQuestion = (e, majorQID) => {
    e.preventDefault();
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
    setMajorQuestions(newQuestions);
  };

  const generateMutation = () => {
    return gql`
      mutation insert_quiz {
          insert_quiz(
          objects:[
                  {
                    name: "${name}"
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

  return (
    <Mutation mutation={generateMutation()}>
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

            <Label htmlFor="name">
              Quiz Title
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Quiz Title"
                required
                value={name}
                onChange={handleChange}
              />
            </Label>

            <Label htmlFor="name">
              Description
              <TextArea
                type="text"
                id="description"
                name="description"
                required
                value={description}
                onChange={handleChange}
                css={{ height: "100px" }}
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
                    onClick={e => deleteMajorQuestion(q.id)}
                  >
                    Delete
                  </Button>
                </Flex>
                <TextArea
                  id={`major-question-${q.id}`}
                  onChange={e => updateMajorQuestion(q.id, e)}
                />
                <Box>
                  <Label>Answer 1</Label>
                  <Flex>
                    <Input
                      my={3}
                      width={1 / 2}
                      name="major-answer-1"
                      onChange={e => handleMajorAnswerChange(e, q.id)}
                    />
                    <Input
                      type="radio"
                      name={`major-question-${q.id}-major-answer`}
                      value="1"
                      onChange={e => handleMajorAnswerChange(e, q.id)}
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
                      onChange={e => handleMajorAnswerChange(e, q.id)}
                    />
                    <Input
                      type="radio"
                      name={`major-question-${q.id}-major-answer`}
                      value="2"
                      onChange={e => handleMajorAnswerChange(e, q.id)}
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
                      onChange={e => handleMajorAnswerChange(e, q.id)}
                    />
                    <Input
                      type="radio"
                      name={`major-question-${q.id}-major-answer`}
                      value="3"
                      onChange={e => handleMajorAnswerChange(e, q.id)}
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
                      onChange={e => handleMajorAnswerChange(e, q.id)}
                    />
                    <Input
                      type="radio"
                      name={`major-question-${q.id}-major-answer`}
                      value="4"
                      onChange={e => handleMajorAnswerChange(e, q.id)}
                    />
                  </Flex>
                </Box>
                <Container width={3 / 4}>
                  {q.minorQuestions.map(minorQ => (
                    <Box>
                      <Text>{minorQ.id}</Text>
                      <TextArea />
                      <Label>Answer 1</Label>
                      <Input />
                      <Label>Answer 2</Label>
                      <Input />
                      <Label>Answer 3</Label>
                      <Input />
                      <Label>Answer 4</Label>
                      <Input />
                    </Box>
                  ))}
                </Container>
                <Flex justifyContent="center">
                  <Button variant="success" onClick={addMajorQuestion}>
                    Add Major Question
                  </Button>
                  <Button
                    variant="primary"
                    onClick={e => {
                      addMinorQuestion(e, q.id);
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

export default AddQuiz;
