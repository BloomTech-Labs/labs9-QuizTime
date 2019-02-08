import { useState } from "react";
import { Mutation } from "react-apollo";
import Router from 'next/router';
import Reveal from "react-reveal/Reveal";
import gql from "graphql-tag";
import {
  Form,
  Input,
  Button,
  Label,
  Text,
  UpperCase,
  TextArea,
  Container
} from "../design-system";
import { Box, Flex } from "@rebass/emotion";

const INSERT_QUIZ = gql`
  mutation insert_quiz($objects: [quiz_insert_input!]!) {
    insert_quiz(objects: $objects) {
      returning {
        id
        name
      }
    }
  }
`;

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

  const formatQuiz = () => {
    const formatted = {
      name,
      description,
      major_questions: {
        data: []
      }
    };

    majorQuestions.forEach(question => {
      const formattedAnswers = question.answers.map(a => ({
        response: a.response,
        correct_answer: a.correct
      }));

      if (question.minorQuestions.length > 0) {
        const formattedMinor = question.minorQuestions.map(mq => ({
          prompt: mq.prompt,
          answers: {
            data: [
              ...mq.answers.map(a => ({
                response: a.response,
                correct_answer: a.correct
              }))
            ]
          }
        }));

        formatted.major_questions.data.push({
          prompt: question.prompt,
          answers: {
            data: [...formattedAnswers]
          },
          minor_questions: {
            data: [...formattedMinor]
          }
        });
      } else {
        formatted.major_questions.data.push({
          prompt: question.prompt,
          answers: {
            data: [...formattedAnswers]
          }
        });
      }
    });
    return formatted;
  };

  const handleNameChange = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleDescriptionChange = e => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleMajorAnswerChange = (e, id, inputID = null) => {
    const newQuestions = majorQuestions.map(q => {
      if (q.id === id) {
        if (e.target.type === "radio") {
          q.answers = q.answers.map(a => {
            if (a.id == e.target.value) {
              a.correct = true;
            } else {
              a.correct = false;
            }
            return a;
          });
        } else {
          q.answers = q.answers.map(a => {
            if (a.id == inputID) {
              a.response = e.target.value;
            }
            return a;
          });
        }
      }
      return q;
    });
    setMajorQuestions(newQuestions);
  };

  const handleMinorAnswerChange = (e, major_id, minor_id, inputID = null) => {
    const newQuestions = majorQuestions.map(mq => {
      if (mq.id == major_id) {
        mq.minorQuestions = mq.minorQuestions.map(q => {
          if (q.id === minor_id) {
            if (e.target.type === "radio") {
              q.answers = q.answers.map(a => {
                if (a.id == e.target.value) {
                  a.correct = true;
                } else {
                  a.correct = false;
                }
                return a;
              });
            } else {
              q.answers = q.answers.map(a => {
                if (a.id == inputID) {
                  a.response = e.target.value;
                }
                return a;
              });
            }
          }
          return q;
        });
      }

      return mq;
    });

    console.log(e.target.type);
    setMajorQuestions(newQuestions);
  };

  const addMajorQuestion = e => {
    e.preventDefault();
    setMajorQuestions([
      ...majorQuestions,
      {
        id: majorQuestions[majorQuestions.length - 1]["id"] + 1,
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
    console.log("Major Questions: ", majorQuestions);
  };

  const updateMajorQuestion = (id, e) => {
    const { value } = e.target;
    const updatedQuestions = majorQuestions.map(q => {
      if (q.id == id) q.prompt = value;
      return q;
    });
    setMajorQuestions(updatedQuestions);
    // console.log("Major Questions: ", majorQuestions);
  };

  const updateMinorQuestion = (majorID, minorID, e) => {
    const { value } = e.target;
    const updatedQuestions = majorQuestions.map(mq => {
      if (mq.id == majorID) {
        mq.minorQuestions = mq.minorQuestions.map(q => {
          if (q.id == minorID) q.prompt = value;
          return q;
        });
      }
      return mq;
    });
    setMajorQuestions(updatedQuestions);
    console.log("Major Questions: ", majorQuestions);
  };

  const deleteMajorQuestion = id => {
    const updatedQuestions = majorQuestions.filter(q => {
      if (q.id != id || q.id == 1) return q;
    });
    setMajorQuestions(updatedQuestions);
  };

  const deleteMinorQuestion = (majorID, minorID) => {
    const updatedQuestions = majorQuestions.map(mq => {
      if (mq.id == majorID) {
        mq.minorQuestions = mq.minorQuestions.filter(q => {
          return q.id != minorID || q.id == 1;
        });
      }
      return mq;
    });
    setMajorQuestions(updatedQuestions);
    console.log("Major Questions: ", majorQuestions);
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
    console.log("Major Questions: ", majorQuestions);
  };

  return (
    <Mutation mutation={INSERT_QUIZ}>
      {(insert_quiz, { error, loading, data }) => (
        <Box mx={5} my={4}>
          <Box
            p={5}
            css={{
              boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
              background: "white"
            }}
          >
            <Form
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                // call the mutation
                const res = await insert_quiz({
                  variables: { objects: [formatQuiz()] }
                });
              }}
            >
              <Flex justifyContent="space-between" flexWrap="wrap">
                <Box my={4}>
                  <Label htmlFor="name">
                    Add a Quiz
                    <Box py={3}>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Quiz Title"
                        required
                        value={name}
                        onChange={handleNameChange}
                      />
                    </Box>
                  </Label>
                </Box>
                <Box p={4} width={[3 / 4]}>
                  <UpperCase fontSize={3} fontWeight={3} py={2}>
                    Creating Questions
                  </UpperCase>
                  <Text lineHeight={1.5} py={2} fontSize={2}>
                    Use "Primary Questions" to assess overall student
                    understanding of a concept.
                  </Text>
                  <Text lineHeight={1.5} py={2} fontSize={2}>
                    Use "Follow-up questions" to break down the concept into smaller
                    pieces or assess a student's knowledge of a topic more generally (optional).
                  </Text>
                </Box>
              </Flex>

              <Label htmlFor="desc">
                Description
                <Box py={3}>
                  <TextArea
                    type="text"
                    id="desc"
                    name="desc"
                    required
                    value={description}
                    onChange={handleDescriptionChange}
                    css={{ height: "100px" }}
                  />
                </Box>
              </Label>

              {majorQuestions.map(q => (
                <Reveal key={q.id} effectIn="fadeInClear" effectOut="fadeOutClear">
                  <Box my={4}>
                    <Flex justifyContent="space-between">
                      <Label htmlFor={`major-question-${q.id}`}>
                        Primary Question {q.id}
                      </Label>
                      <Button
                        m={3}
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
                    <Box m={3}>
                      <Box>
                        <Label>Answer 1</Label>
                        <Flex>
                          <Input
                            my={3}
                            width={1 / 2}
                            name="major-answer-1"
                            onChange={e => handleMajorAnswerChange(e, q.id, 1)}
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
                            onChange={e => handleMajorAnswerChange(e, q.id, 2)}
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
                            onChange={e => handleMajorAnswerChange(e, q.id, 3)}
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
                            onChange={e => handleMajorAnswerChange(e, q.id, 4)}
                          />
                          <Input
                            type="radio"
                            name={`major-question-${q.id}-major-answer`}
                            value="4"
                            onChange={e => handleMajorAnswerChange(e, q.id)}
                          />
                        </Flex>
                      </Box>
                    </Box>
                    <Container width={3 / 4}>
                      {q.minorQuestions.map(minorQ => (
                        <Reveal key={minorQ.id} effectIn="fadeInClear" effectOut="fadeOutClear">
                          <Box my={4}>
                            <Flex justifyContent="space-between">
                              <Label htmlFor={`minor-question-${minorQ.id}`}>
                                Follow-up Question {minorQ.id}
                              </Label>
                              <Button
                                m={3}
                                variant="error"
                                p={0}
                                fontSize={0}
                                onClick={e =>
                                  deleteMinorQuestion(q.id, minorQ.id)
                                }
                              >
                                Delete
                              </Button>
                            </Flex>
                            <TextArea
                              id={`minor-question-${minorQ.id}`}
                              onChange={e =>
                                updateMinorQuestion(q.id, minorQ.id, e)
                              }
                            />
                            <Box>
                              <Label>Answer 1</Label>
                              <Flex>
                                <Input
                                  my={3}
                                  width={1 / 2}
                                  name="minor-answer-1"
                                  onChange={e =>
                                    handleMinorAnswerChange(
                                      e,
                                      q.id,
                                      minorQ.id,
                                      1
                                    )
                                  }
                                />
                                <Input
                                  type="radio"
                                  name={`minor-question-${
                                    minorQ.id
                                  }-minor-answer`}
                                  value="1"
                                  onChange={e =>
                                    handleMinorAnswerChange(e, q.id, minorQ.id)
                                  }
                                />
                              </Flex>
                            </Box>
                            <Box>
                              <Label>Answer 2</Label>
                              <Flex>
                                <Input
                                  my={3}
                                  width={1 / 2}
                                  name="minor-answer-2"
                                  onChange={e =>
                                    handleMinorAnswerChange(
                                      e,
                                      q.id,
                                      minorQ.id,
                                      2
                                    )
                                  }
                                />
                                <Input
                                  type="radio"
                                  name={`minor-question-${
                                    minorQ.id
                                  }-minor-answer`}
                                  value="2"
                                  onChange={e =>
                                    handleMinorAnswerChange(e, q.id, minorQ.id)
                                  }
                                />
                              </Flex>
                            </Box>
                            <Box>
                              <Label>Answer 3</Label>
                              <Flex>
                                <Input
                                  my={3}
                                  width={1 / 2}
                                  name="minor-answer-3"
                                  onChange={e =>
                                    handleMinorAnswerChange(
                                      e,
                                      q.id,
                                      minorQ.id,
                                      3
                                    )
                                  }
                                />
                                <Input
                                  type="radio"
                                  name={`minor-question-${
                                    minorQ.id
                                  }-minor-answer`}
                                  value="3"
                                  onChange={e =>
                                    handleMinorAnswerChange(e, q.id, minorQ.id)
                                  }
                                />
                              </Flex>
                            </Box>
                            <Box>
                              <Label>Answer 4</Label>
                              <Flex>
                                <Input
                                  my={3}
                                  width={1 / 2}
                                  name="minor-answer-4"
                                  onChange={e =>
                                    handleMinorAnswerChange(
                                      e,
                                      q.id,
                                      minorQ.id,
                                      4
                                    )
                                  }
                                />
                                <Input
                                  type="radio"
                                  name={`minor-question-${
                                    minorQ.id
                                  }-minor-answer`}
                                  value="4"
                                  onChange={e =>
                                    handleMinorAnswerChange(e, q.id, minorQ.id)
                                  }
                                />
                              </Flex>
                            </Box>
                          </Box>
                        </Reveal>
                      ))}
                    </Container>
                    <Flex justifyContent="center">
                      <Button
                        mx={3}
                        variant="success"
                        onClick={addMajorQuestion}
                      >
                        Add Primary Question
                      </Button>
                      <Button
                        mx={3}
                        variant="primary"
                        onClick={e => {
                          addMinorQuestion(e, q.id);
                        }}
                      >
                        Add Follow-up Question
                      </Button>
                    </Flex>
                  </Box>
                </Reveal>
              ))}
              <Button my={3} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {/* render errors, loading, or data */}
            {error && (
              <p>
                {" "}
                An error occurred attempting to add a quiz. Check that you have
                filled in a name for this quiz that is different from your other
                quizzes, and that you have enough credits (50 credits). Then try
                again.{" "}
              </p>
            )}
            {loading && <p> ...loading </p>}
            {data && (
              <p>
                {" "}
                successfully created quiz with id of{" "}
                {data.insert_quiz.returning[0].id}
              </p>
            )}
          </Box>
        </Box>
      )}
    </Mutation>
  );
}

export default AddQuiz;
