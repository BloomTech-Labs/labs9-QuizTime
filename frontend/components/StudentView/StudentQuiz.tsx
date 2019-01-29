import React, { Component } from 'react';
import { getStudentToken } from '../../utils/auth';
import {
  Text,
  BoldText,
  UpperCase,
  Container,
  Label,
  Input,
  BoxText,
  BoxHolder,
  ButtonLink,
} from '../design-system';

import { Box, Flex } from '@rebass/emotion';
const url = 'http://localhost:51444/api/student-proxy';

class StudentQuiz extends Component {
  //For development purposes.  Can remove later after retrieving data.
  state = {
    quiz: null,
    majorIndex: 0,
    minorIndex: [0],
    majorCorrect: [], //* determines whether minor question map is rendered or not
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
    majorQuestionCount: 0,
    minorQuestionCount: 0,
    majorCorrectAnswers: 0,
    minorCorrectAnswers: 0,
    isAnswered: false,
    isMajor: true,
  };

  componentDidMount() {
    this.getQuiz();
  }

  nextQuestion = (e, q) => {
    this.keepScore();
    this.submitAnswer();
    this.majorMinorOrDone();
  };

  render() {
    const {
      isAnswered,
      quiz,
      majorIndex,
      majorCorrect,
      minorIndex,
    } = this.state;
    return (
      <div>
        {quiz ? (
          <>
            <Box m={4} width={3 / 4}>
              <BoxText>
                <UpperCase>{quiz.name}</UpperCase>
              </BoxText>
              <BoxText>Quiz description ...</BoxText>
            </Box>
            <div>
              {quiz.major_questions.slice(0, majorIndex + 1).map((q, idx) => (
                <Box width={3 / 4} m={4} p={2} key={q.id}>
                  <BoxText htmlFor={`major-question-${q.id}`}>
                    <UpperCase>Question {idx + 1}</UpperCase>
                  </BoxText>
                  <BoxText>{q.prompt}</BoxText>
                  {q.answers.map((a, index) => (
                    <Box key={index}>
                      <Flex>
                        <Input
                          onChange={e => this.handleMajorChange(e, q, a)}
                          type='radio'
                          name={`major-question-${q.id}-major-answer`}
                          value={index + 1}
                        />
                        <BoxText>{a.response}</BoxText>
                      </Flex>
                    </Box>
                  ))}
                  {!majorCorrect[idx] &&
                    quiz.major_questions[idx].minor_questions
                      .slice(0, minorIndex[idx])
                      .map((q, index) => (
                        <Box width={3 / 4} m={4} p={2} key={q.id}>
                          <BoxText htmlFor={`minor-question-${q.id}`}>
                            <UpperCase>Minor Question {index + 1}</UpperCase>
                          </BoxText>
                          <BoxText>{q.prompt}</BoxText>
                          {q.answers.map((a, index) => (
                            <Box key={index}>
                              <Flex>
                                <Input
                                  onChange={e => this.handleMiniChange(e, q, a)}
                                  type='radio'
                                  name={`mini-question-${q.id}-mini-answer`}
                                  value={index + 1}
                                />
                                <BoxText>{a.response}</BoxText>
                              </Flex>
                            </Box>
                          ))}
                        </Box>
                      ))}
                  <Flex justifyContent='flex-end'>
                    <ButtonLink
                      disabled={!isAnswered}
                      mx={5}
                      variant='error'
                      onClick={this.nextQuestion}
                    >
                      Submit Answer
                    </ButtonLink>
                  </Flex>
                </Box>
              ))}
            </div>
          </>
        ) : (
          <Box>Loading ...</Box>
        )}
      </div>
    );
  }

  keepScore = () => {
    const { currentMajorQuestion, currentMinorQuestion } = this.state;
    if (currentMajorQuestion.correct) {
      this.setState(s => ({ majorCorrectAnswers: s.majorCorrectAnswers + 1 }));
    } else {
      if (currentMinorQuestion.correct) {
        this.setState(s => ({
          minorCorrectAnswers: s.minorCorrectAnswers + 1,
        }));
      }
    }
  };

  submitAnswer = () => {
    const { isMajor, majorCorrect, currentMajorQuestion } = this.state;
    if (isMajor) {
      this.submitMajorAnswer();
      majorCorrect.push(currentMajorQuestion.correct);
      this.setState({ majorCorrect });
    } else {
      this.submitMinorAnswer();
    }
  };
  majorMinorOrDone = () => {
    const { currentMajorQuestion, majorIndex, quiz, minorIndex } = this.state;
    //* Did the student get the current Major Question correct?
    //* Yes => next major question (if exist)
    //* No => next minor question (if exist)
    if (currentMajorQuestion.correct) {
      //* Is the current Major Question the last Major Question?
      //* Yes => calculate score.
      if (majorIndex === quiz.major_questions.length - 1) {
        const score = this.calculateScore();
        return alert(`score is ${score}`);
      }

      //* Major question correct, so don't render minor question.
      minorIndex.push(0);

      //* Advance majorIndex to display next Major Question
      this.setState(s => ({
        majorIndex: s.majorIndex + 1,
        isMajor: true,
        minorIndex,
      }));
      //* MajorQuestion answer was wrong.
      //* Did we reach the end of Minor Questions for current wrong Major Question?
    } else if (
      minorIndex[majorIndex] ===
      quiz.major_questions[majorIndex].minor_questions.length
    ) {
      //* If yes, move on to next Major Question (if there is one. otherwise display score). If no, display next Minor Question.
      minorIndex.push(0);
      if (majorIndex === quiz.major_questions.length - 1) {
        const score = this.calculateScore();
        return alert(`score is ${score}`);
      } else {
        this.setState(s => ({
          majorIndex: s.majorIndex + 1,
          isMajor: true,
          minorIndex,
        }));
      }
      //* Display next Minor Question for current wrong Major Question.
    } else {
      minorIndex[majorIndex] = minorIndex[majorIndex] + 1;
      this.setState({
        minorIndex,
        isMajor: false,
      });
    }
  };
  getQuiz = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        type: 'get_quiz_query',
        token: getStudentToken(),
      }),
    };

    fetch(url, options)
      .then(res => res.json())
      .then(({ data }) => this.setState({ quiz: data.quiz[0] }))
      .catch(error => console.log(error));
  };

  submitMajorAnswer = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        type: 'insert_student_major_answer',
        token: getStudentToken(),
        ...this.state.currentMajorQuestion,
      }),
    };
    fetch(url, options)
      .then(res => res.json())
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  };

  submitMinorAnswer = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        type: 'insert_student_minor_answer',
        token: getStudentToken(),
        ...this.state.currentMinorQuestion,
      }),
    };
    fetch(url, options)
      .then(res => res.json())
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  };

  handleMajorChange = (e, q, a) => {
    this.setState({
      currentMajorQuestion: {
        major_question_id: q.id,
        student_answer: a.id,
        correct: a.correct_answer,
      },
      isAnswered: true,
    });
  };

  handleMiniChange = (e, q, a) => {
    this.setState({
      currentMinorQuestion: {
        minor_question_id: q.id,
        student_answer: a.id,
        correct: a.correct_answer,
      },
      isAnswered: true,
    });
  };

  calculateScore = () => {
    const { majorCorrectAnswers, minorCorrectAnswers } = this.state;
    const score = majorCorrectAnswers * 10 + minorCorrectAnswers * 2;
    return score;
  };
}

export default StudentQuiz;
