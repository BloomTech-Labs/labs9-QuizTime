import { useState } from "react";
import { Mutation } from "react-apollo";
import Reveal from "react-reveal/Reveal";

import { INSERT_MINOR_QUESTION } from "../../../mutations";
import { GET_QUIZ_QUERY } from "../../../queries";

import { Label, TextArea, Input, Form, Button } from "../../design-system";
import { Box, Flex } from "@rebass/emotion";

export default ({ major_id, quiz_id, show }) => {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState([
    { temp: 1, response: "", correct_answer: false },
    { temp: 2, response: "", correct_answer: false },
    { temp: 3, response: "", correct_answer: false },
    { temp: 4, response: "", correct_answer: false }
  ]);

  const handleReset = () => {
    show(false);
    setPrompt("");
    setAnswers([
      { temp: 1, response: "", correct_answer: false },
      { temp: 2, response: "", correct_answer: false },
      { temp: 3, response: "", correct_answer: false },
      { temp: 4, response: "", correct_answer: false }
    ]);
  };

  const formatQuestion = () => {
    return {
      prompt,
      major_question_id: major_id,
      answers: {
        data: [
          {
            response: answers[0].response,
            correct_answer: answers[0].correct_answer
          },
          {
            response: answers[1].response,
            correct_answer: answers[1].correct_answer
          },
          {
            response: answers[2].response,
            correct_answer: answers[2].correct_answer
          },
          {
            response: answers[3].response,
            correct_answer: answers[3].correct_answer
          }
        ]
      }
    };
  };

  const handlePromptChange = e => {
    setPrompt(e.target.value);
  };

  const handleAnswerChange = (e, temp) => {
    const newAnswers = answers.map(answer => {
      if (e.target.type === "radio") {
        if (temp === answer.temp) {
          return {
            ...answer,
            correct_answer: true
          };
        } else {
          return {
            ...answer,
            correct_answer: false
          };
        }
      } else {
        if (temp === answer.temp) {
          return {
            ...answer,
            response: e.target.value
          };
        } else {
          return answer;
        }
      }
    });
    setAnswers(newAnswers);
  };

  return (
    <Mutation
      mutation={INSERT_MINOR_QUESTION}
      refetchQueries={() => [{ query: GET_QUIZ_QUERY, variables: { quiz_id } }]}
    >
      {(insert_minor_question, { error, loading, data }) => (
        <Reveal effectIn="fadeInClear" effectOut="fadeOutClear">
          <Form
            onSubmit={async e => {
              e.preventDefault();
              insert_minor_question({
                variables: { objects: [formatQuestion()] }
              });
              handleReset();
            }}
          >
            <Box my={4}>
              <Flex jutifyContent="space-between">
                <Label htmlFor="new-minor-question">New Minor Question</Label>
              </Flex>
              <TextArea
                id="new-minor-question"
                onChange={handlePromptChange}
                value={prompt}
                placeholder="New question prompt..."
              />
              {answers.map(answer => (
                <Box>
                  <Label>Answer {answer.temp}</Label>
                  <Flex>
                    <Input
                      my={3}
                      width={1 / 2}
                      name={`new-minor-answer-${answer.temp}`}
                      onChange={e => handleAnswerChange(e, answer.temp)}
                      value={answer.response}
                    />
                    <Input
                      type="radio"
                      name={`new-minor-answer-${answer.temp}`}
                      onChange={e => handleAnswerChange(e, answer.temp)}
                      checked={answer.correct_answer}
                    />
                  </Flex>
                </Box>
              ))}
            </Box>
            <Button
              my={3}
              variant="primary"
              type="submit"
            >
              Add Minor Question
            </Button>
          </Form>
        </Reveal>
      )}
    </Mutation>
  );
};
