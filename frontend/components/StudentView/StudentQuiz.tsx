import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import axios from 'axios';

import { getStudentToken } from "../../utils/auth";

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

class StudentQuiz extends Component {
  //For development purposes.  Can remove later after retrieving data.
  state = {
    quiz: null,
    majorIndex: 0,
    minorIndex: [0],
    majorCorrect: [],
    currentMajorQuestion: {
      major_question_id: null,
      student_answer: null,
      correct: false,
    },
    currentMinorQuestion: {
      minor_question_id: null,
      student_answer: null,
      correct: false,
    },
    questionCount: 0,
    majorCorrectAnswers: 0,
    minorCorrectAnswers: 0,
    isAnswered: false,
    isMajor: true
  };

  componentDidMount() {
    fetch('http://localhost:51444/api/student-proxy',
      {
        method: 'POST',
        body: JSON.stringify({
          type: "get_quiz_query",
          token: getStudentToken()
        }),
      })
      .then(res => res.json())
      .then(data => this.setState({ quiz: data.data.quiz[0] }))
  };

  nextQuestion = (e, q) => {
    if (this.state.isMajor) {
      console.log('sending current major', this.state.currentMajorQuestion)
      fetch('http://localhost:51444/api/student-proxy',
        {
          method: 'POST',
          body: JSON.stringify({
            type: "insert_student_major_answer",
            token: getStudentToken(),
            ...this.state.currentMajorQuestion
          })
        })

      if (this.state.currentMajorQuestion.correct) {
        this.setState({ majorCorrectAnswer: this.state.majorCorrectAnswers++ });
      }
    } else {
      console.log('sending current minor', this.state.currentMinorQuestion)
      fetch('http://localhost:51444/api/student-proxy',
        {
          method: 'POST',
          body: JSON.stringify({
            type: "insert_student_minor_answer",
            token: getStudentToken(),
            ...this.state.currentMinorQuestion
          })
        })
      if (this.state.currentMinorQuestion.correct) {
        this.setState({ minorCorrectAnswer: this.state.minorCorrectAnswers++ });
      }
    }

    if (this.state.isMajor) {
      let majorCorrect = this.state.majorCorrect
      majorCorrect.push(this.state.currentMajorQuestion.correct)
      this.setState({ majorCorrect })
    }

    if (this.state.currentMajorQuestion.correct) {
      if (this.state.majorIndex === this.state.quiz.major_questions.length - 1) {
        const score = this.calculateScore()
        return alert(`score is ${score}`)
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
    else if (this.state.minorIndex[this.state.majorIndex] === this.state.quiz.major_questions[this.state.majorIndex].minor_questions.length) {
      let minorIndex = this.state.minorIndex
      minorIndex.push(0)
      if (this.state.majorIndex === this.state.quiz.major_questions.length - 1) {
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
      currentMajorQuestion: { major_question_id: q.id, student_answer: a.id, correct: a.correct_answer },
      isAnswered: true
    })
  }

  handleMiniChange = (e, q, a) => {
    console.log('radio input', e.target.value, q.id, a.id, a.correct_answer)

    this.setState({
      currentMinorQuestion: { minor_question_id: q.id, student_answer: a.id, correct: a.correct_answer },
      isAnswered: true
    })
  }

  calculateScore = () => {
    const { majorCorrectAnswers, minorCorrectAnswers } = this.state;
    const score = majorCorrectAnswers * 10 + minorCorrectAnswers * 2;

    return score;
  }

  render() {
    const { isAnswered } = this.state
    return (
      <div>
        {
          this.state.quiz ? (
            <>
              <Box m={4} width={3 / 4}>
                <BoxText><UpperCase>{this.state.quiz.name}</UpperCase></BoxText>
                <BoxText>Quiz description ...</BoxText>
              </Box>
              <div>
                {this.state.quiz.major_questions.slice(0, this.state.majorIndex + 1).map((q, idx) => (
                  <Box width={3 / 4} m={4} p={2} key={q.id}>
                    <BoxText htmlFor={`major-question-${q.id}`}>
                      <UpperCase>Question {idx + 1}</UpperCase>
                    </BoxText>
                    <BoxText>
                      {q.prompt}
                    </BoxText>
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
                    {!this.state.majorCorrect[idx] && this.state.quiz.major_questions[idx].minor_questions.slice(0, this.state.minorIndex[idx]).map((q, index) => (
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
                ))}</div></>
          ) : (
              <div>Loading ...</div>
            )
        }
      </div>
    )
  };
};

export default StudentQuiz;