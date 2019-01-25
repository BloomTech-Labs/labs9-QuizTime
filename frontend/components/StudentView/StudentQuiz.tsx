import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import {
  Text,
  BoldText,
  UpperCase,
  Container,
  Label,
  Input,
  BoxText,
  BoxHolder,
  Button
} from "../design-system";

import { Box, Flex } from "@rebass/emotion";

let dummyData = {
  name: "Lambda Quiz",
  details: "This quiz is designed to assess your understaning of the procedures and expectaions of being a student at Lambda School",
  majorQuestions: [
    {
      id: 1,
      prompt: "Which of the following is NOT a daily requirement of Lambda School?",
      answers: [
        { label: "a", response: "airtable", correct: false },
        { label: "b", response: "DM instructor", correct: true },
        { label: "c", response: "camera on", correct: false },
        { label: "d", response: "code challenge", correct: false }
      ],
      minorQuestions: []
    },
    {
      id: 2,
      prompt: "If you have a questions, who should you reach out to first?",
      answers: [
        { label: "a", response: "Instructor", correct: false },
        { label: "b", response: "Austin", correct: false },
        { label: "c", response: "Yer Mom", correct: false },
        { label: "d", response: "Project Manager", correct: true }
      ],
      minorQuestions: []
    },
    {
      id: 3,
      prompt: "If you have a questions, who should you reach out to first?",
      answers: [
        { label: "a", response: "Instructor", correct: false },
        { label: "b", response: "Austin", correct: false },
        { label: "c", response: "Yer Mom", correct: false },
        { label: "d", response: "Project Manager", correct: true }
      ],
      minorQuestions: []
    },
    {
      id: 4,
      prompt: "If you have a questions, who should you reach out to first?",
      answers: [
        { label: "a", response: "Instructor", correct: false },
        { label: "b", response: "Austin", correct: false },
        { label: "c", response: "Yer Mom", correct: false },
        { label: "d", response: "Project Manager", correct: true }
      ],
      minorQuestions: []
    },
    {
      id: 5,
      prompt: "If you have a questions, who should you reach out to first?",
      answers: [
        { label: "a", response: "Instructor", correct: false },
        { label: "b", response: "Austin", correct: false },
        { label: "c", response: "Yer Mom", correct: false },
        { label: "d", response: "Project Manager", correct: true }
      ],
      minorQuestions: []
    },
  ],
};

let data = {
  "quiz": [
    {
      "id": 12,
      "name": "mutation test",
      "description": "test ui",
      "major_questions": [
        {
          "id": 3,
          "prompt": "major question 1 for quiz id 12",
          "answers": [
            {
              "id": 1,
              "response": "response 1 for question 1",
              "correct_answer": true
            },
            {
              "id": 2,
              "response": "response 2 for question 1",
              "correct_answer": false
            },
            {
              "id": 3,
              "response": "response 3 for question 1",
              "correct_answer": false
            },
            {
              "id": 4,
              "response": "response 4 for question 1",
              "correct_answer": false
            }
          ],
          "minor_questions": [
            {
              "id": 2,
              "prompt": "minor question 1 for major question 1",
              "answers": [
                {
                  "id": 5,
                  "response": "response 1 for minor question 1 for major question 1",
                  "correct_answer": false
                },
                {
                  "id": 6,
                  "response": "response 2 for minor question 1 for major question 1",
                  "correct_answer": false
                },
                {
                  "id": 7,
                  "response": "response 3 for minor question 1 for major question 1",
                  "correct_answer": true
                },
                {
                  "id": 8,
                  "response": "response 4 for minor question 1 for major question 1",
                  "correct_answer": false
                }
              ]
            },
            {
              "id": 1,
              "prompt": "minor question 2 for major question 1",
              "answers": [
                {
                  "id": 1,
                  "response": "response 1 for minor question 2 for major question 1",
                  "correct_answer": false
                },
                {
                  "id": 2,
                  "response": "response 2 for minor question 2 for major question 1",
                  "correct_answer": true
                },
                {
                  "id": 3,
                  "response": "response 3 for minor question 2 for major question 1",
                  "correct_answer": false
                },
                {
                  "id": 4,
                  "response": "response 4 for minor question 2 for major question 1",
                  "correct_answer": false
                }
              ]
            }
          ]
        },
        {
          "id": 4,
          "prompt": "major question 2 for quiz id 12",
          "answers": [
            {
              "id": 5,
              "response": "response 1 for question 2",
              "correct_answer": true
            },
            {
              "id": 6,
              "response": "response 2 for question 2",
              "correct_answer": false
            },
            {
              "id": 7,
              "response": "response 3 for question 2",
              "correct_answer": false
            },
            {
              "id": 8,
              "response": "response 4 for question 2",
              "correct_answer": false
            }
          ],
          "minor_questions": [
            {
              "id": 3,
              "prompt": "minor question 1 for major question 2",
              "answers": [
                {
                  "id": 9,
                  "response": "response 1 for minor question 1 for major question 2",
                  "correct_answer": false
                },
                {
                  "id": 10,
                  "response": "response 2 for minor question 1 for major question 2",
                  "correct_answer": true
                },
                {
                  "id": 11,
                  "response": "response 3 for minor question 1 for major question 2",
                  "correct_answer": false
                },
                {
                  "id": 12,
                  "response": "response 4 for minor question 1 for major question 2",
                  "correct_answer": false
                }
              ]
            },
            {
              "id": 4,
              "prompt": "minor question 2 for major question 2",
              "answers": [
                {
                  "id": 13,
                  "response": "response 1 for minor question 2 for major question 2",
                  "correct_answer": false
                },
                {
                  "id": 14,
                  "response": "response 2 for minor question 2 for major question 2",
                  "correct_answer": false
                },
                {
                  "id": 15,
                  "response": "response 3 for minor question 2 for major question 2",
                  "correct_answer": true
                },
                {
                  "id": 16,
                  "response": "response 4 for minor question 2 for major question 2",
                  "correct_answer": false
                }
              ]
            }
          ]
        },
        {
          "id": 6,
          "prompt": "major question 3 for quiz id 12",
          "answers": [
            {
              "id": 13,
              "response": "response 1 for question 3",
              "correct_answer": true
            },
            {
              "id": 14,
              "response": "response 2 for question 3",
              "correct_answer": false
            },
            {
              "id": 15,
              "response": "response 3 for question 3",
              "correct_answer": false
            },
            {
              "id": 16,
              "response": "response 4 for question 3",
              "correct_answer": false
            }
          ],
          "minor_questions": [
            {
              "id": 7,
              "prompt": "minor question 1 for major question 3",
              "answers": [
                {
                  "id": 25,
                  "response": "response 1 for minor question 1 for major question 3",
                  "correct_answer": false
                },
                {
                  "id": 26,
                  "response": "response 2 for minor question 1 for major question 3",
                  "correct_answer": true
                },
                {
                  "id": 27,
                  "response": "response 3 for minor question 1 for major question 3",
                  "correct_answer": false
                },
                {
                  "id": 28,
                  "response": "response 4 for minor question 1 for major question 3",
                  "correct_answer": false
                }
              ]
            },
            {
              "id": 8,
              "prompt": "minor question 2 for major question 3",
              "answers": [
                {
                  "id": 29,
                  "response": "response 1 for minor question 2 for major question 3",
                  "correct_answer": false
                },
                {
                  "id": 30,
                  "response": "response 2 for minor question 2 for major question 3",
                  "correct_answer": false
                },
                {
                  "id": 31,
                  "response": "response 3 for minor question 2 for major question 3",
                  "correct_answer": true
                },
                {
                  "id": 32,
                  "response": "response 4 for minor question 2 for major question 3",
                  "correct_answer": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


class StudentQuiz extends Component {
  //For development purposes.  Can remove later after retrieving data.
  state = {
    dummyData,
    modelData: data.quiz[0],
    majorIndex: 0,
    // minorIndex: 0,
    minorIndex: [0],
    majorCorrect: [],
    currentMajorQuestion: {
      question_id: null,
      answer_id: null,
      correct: false,
    },
    currentMinorQuestion: {
      question_id: null,
      answer_id: null,
      correct: false,
    },
    questionCount: 0,
    correctAnswers: 0,
    isAnswered: false,
    isMajor: true
  };

  //function to move to the next question
  // nextQuestion = (e, id) => {
  //   console.log('sending', this.state.currentQuestion)
  //   this.setState((c) => ({
  //     ...c,
  //     currentQuestion: { ...c.currentQuestion, question_id: c.currentQuestion.question_id + 1 }
  //   }))
  // }

  nextQuestion = (e, q) => {
    if (this.state.isMajor) {
      console.log('sending current major', this.state.currentMajorQuestion)
    } else {
      console.log('sending current minor', this.state.currentMinorQuestion)
    }

    if (this.state.isMajor) {
      let majorCorrect = this.state.majorCorrect
      majorCorrect.push(this.state.currentMajorQuestion.correct)
      this.setState({ majorCorrect })
    }

    if (this.state.currentMajorQuestion.correct) {
      if (this.state.majorIndex === this.state.modelData.major_questions.length - 1) {
        return alert(`score is ${this.state.correctAnswers}`)
      }

      let minorIndex = this.state.minorIndex
      minorIndex.push(0)
      this.setState(s => (
        {
          majorIndex: ++s.majorIndex,
          isMajor: true,
          minorIndex
        }))
    }
    else if (this.state.minorIndex[this.state.majorIndex] === this.state.modelData.major_questions[this.state.majorIndex].minor_questions.length) {
      let minorIndex = this.state.minorIndex
      minorIndex.push(0)
      if (this.state.majorIndex === this.state.modelData.major_questions.length - 1) {
        return alert(`score is ${this.state.correctAnswers}`)
      } else {
        this.setState(s => (
          {
            majorIndex: ++s.majorIndex,
            isMajor: true,
            minorIndex
          })
        )
      }
    } else {
      let minorIndex = this.state.minorIndex
      minorIndex[this.state.majorIndex] = minorIndex[this.state.majorIndex] + 1
      this.setState({
        minorIndex,
        isMajor: false
      })
    }
  }

  handleChange = (e, q, a) => {
    console.log('radio input', e.target.value, q.id, a.id, a.correct_answer)

    this.setState({
      currentMajorQuestion: { question_id: q.id, answer_id: a.id, correct: a.correct_answer },
      isAnswered: true
    })
  }

  handleMiniChange = (e, q, a) => {
    console.log('radio input', e.target.value, q.id, a.id, a.correct_answer)

    this.setState({
      currentMinorQuestion: { question_id: q.id, answer_id: a.id, correct: a.correct_answer },
      isAnswered: true
    })
  }


  render() {
    // const { majorQuestions } = this.state.dummyData;
    const { isAnswered } = this.state
    const { major_questions: majorQuestions } = this.state.modelData
    return (

      <>
        {/* <Box m={4} width={3 / 4}>
          <BoxText><UpperCase>{this.state.dummyData.name}</UpperCase></BoxText>
          <BoxText>{this.state.dummyData.details}</BoxText>
        </Box> */}
        <Box m={4} width={3 / 4}>
          <BoxText><UpperCase>{this.state.modelData.name}</UpperCase></BoxText>
          <BoxText>{this.state.modelData.description}</BoxText>
        </Box>
        {/* {console.log('current question id', this.state.currentMajorQuestion.question_id)} */}
        {majorQuestions.slice(0, this.state.majorIndex + 1).map((q, idx) => (
          <Box width={3 / 4} m={4} p={2} key={q.id}>
            <BoxText htmlFor={`major-question-${q.id}`}>
              <UpperCase>Question {idx + 1}</UpperCase>
            </BoxText>
            <BoxText>
              {q.prompt}
            </BoxText>
            {/* {console.log('q.answers', q.answers)} */}
            {q.answers.map((a, index) => (
              <Box key={index}>
                <Flex>
                  <Input
                    onChange={(e) => this.handleChange(e, q, a)}
                    type="radio"
                    name={`major-question-${q.id}-major-answer`}
                    value={index + 1}
                  />
                  <BoxText>{a.response}</BoxText>
                </Flex>
              </Box>
            ))}
            {!this.state.majorCorrect[idx] && majorQuestions[idx].minor_questions.slice(0, this.state.minorIndex[idx]).map((q, index) => (
              <Box width={3 / 4} m={4} p={2} key={q.id}>
                <BoxText htmlFor={`minor-question-${q.id}`}>
                  <UpperCase>Minor Question {index + 1}</UpperCase>
                </BoxText>
                <BoxText>
                  {q.prompt}
                </BoxText>
                {q.answers.map((a, index) => (
                  <Box key={index}>
                    <Flex>
                      <Input
                        onChange={(e) => this.handleMiniChange(e, q, a)}
                        type="radio"
                        name={`mini-question-${q.id}-mini-answer`}
                        value={index + 1}
                      />
                      <BoxText>{a.response}</BoxText>
                    </Flex>
                  </Box>
                ))}
              </Box>
            ))}
            <Flex justifyContent="flex-end">
              <Button disabled={!isAnswered} mx={5} variant="error" onClick={(e) => this.nextQuestion(e, q)}>Submit and Next</Button>
            </Flex>
          </Box>
        ))}
      </>
    )
  };
};

export default StudentQuiz;