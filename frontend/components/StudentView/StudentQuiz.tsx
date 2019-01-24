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
    details:  "This quiz is designed to assess your understaning of the procedures and expectaions of being a student at Lambda School",
    majorQuestions: [
        {
            id: 1,
            prompt: "Which of the following is NOT a daily requirement of Lambda School?",
            answers: [
                { label: "a", response: "airtable", correct: false },
                { label: "b", response: "DM instructor", correct: true },
                { label: "c", response:  "camera on", correct: false },
                { label: "d", response: "code challenge", correct: false  }
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
                { label: "d", response: "Project Manager", correct: true  }
            ],
            minorQuestions: []
        },
    ],
};


class StudentQuiz extends Component {
    //For development purposes.  Can remove later after retrieving data.
    state = dummyData;
    
    render() {
        const { majorQuestions } = this.state;
        return( 

            <>
            {/* we will need to pull in the quiz data from the database and render it as a quiz */}
            {/* will need to map over the quiz questions and render a box for each */}   
            {/* {console.log('state', this.state.name)}
            {console.log('prompt', this.state.majorQuestions[0].prompt)}  
            {console.log('answers', this.state.majorQuestions[0].answers)} 
            {console.log('first answer correct?', this.state.majorQuestions[0].answers[0].correct)}  */}
            <Box m={4} width={3/4}>
            {/* need to get class name from props? */}
            <BoxText fontSize ><UpperCase>{this.state.name}</UpperCase></BoxText>
            <BoxText>{this.state.details}</BoxText>
            </Box>

            {majorQuestions.map(q => (
                <Box width={3/4} m={4} p={2} key={q.id}>
                    <BoxText htmlFor={`major-question-${q.id}`}>
                        <UpperCase>Question {q.id}</UpperCase>
                    </BoxText>
                    <BoxText>
                       {q.prompt}
                    </BoxText>
                    {console.log('q.answers', q.answers)}

                    <Box>
                      <Flex>
                      <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="1"
                        />
                        <BoxText>{q.answers[0].response}</BoxText>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                      <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="2"
                        />
                        <BoxText>{q.answers[1].response}</BoxText>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                      <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="3"
                        />
                        <BoxText>{q.answers[2].response}</BoxText>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                      <Input
                          type="radio"
                          name={`major-question-${q.id}-major-answer`}
                          value="4"
                        />
                        <BoxText>{q.answers[3].response}</BoxText>
                      </Flex>
                    </Box>
                    <Flex justifyContent="flex-end">
                        <Button mx={5} variant = "error">Submit</Button>
                    </Flex>
                </Box>
            ))}

        
            </>
    )};
};

export default StudentQuiz;