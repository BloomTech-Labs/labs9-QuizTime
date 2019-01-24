import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import {
    Text,
    BoldText,
    UpperCase,
    Container,
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
            prompt: "Which of the following is not a daily requirement of Lambda School?",
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
            <Box m={4}>
            {/* need to get class name from props? */}
            <BoxText fontSize ><UpperCase>{this.state.name}</UpperCase></BoxText>
            <BoxText>{this.state.details}</BoxText>
            </Box>

            {majorQuestions.map(q => (
                <Box m={4} key={q.id}>
                    <BoxText htmlFor={`major-question-${q.id}`}>
                        <UpperCase>Question {q.id}</UpperCase>
                    </BoxText>
                    <BoxText>
                       Prompt {q.prompt}
                    </BoxText>
                    {console.log('q.answers', q.answers)}
                    {q.answers.map(a => (
                    <Box>
                        <BoxText>{a.label}. {a.response}</BoxText>
                    </Box>
                    ))}
                </Box>
            ))}

        
            </>
    )};
};

export default StudentQuiz;