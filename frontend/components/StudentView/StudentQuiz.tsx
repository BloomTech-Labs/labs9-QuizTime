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
    majorQuestions: [
        {
            id: 1,
            prompt: "Which of the following is not a daily requirement of Lambda School",
            answers: [
                { response: "airtable", correct: false },
                { response: "DM instructor", correct: true },
                { response:  "camera on", correct: false },
                { response: "code challenge", correct: false  }
            ],
            minorQuestions: []
        }
    ],
};


class StudentQuiz extends Component {
    //For development purposes.  Can remove later after retrieving data.
    state = dummyData;
    
    render() {
        return(
            
    <>
    {/* we will need to pull in the quiz data from the database and render it as a quiz */}
    {/* will need to map over the quiz questions and render a box for each */}   
    {console.log('state', this.state.name)}
    {console.log('prompt', this.state.majorQuestions[0].prompt)}  
    {console.log('answers', this.state.majorQuestions[0].answers)} 
    {console.log('first answer correct?', this.state.majorQuestions[0].answers[0].correct)} 
    <Box b="1px solid black">
    <BoxText><UpperCase>Quiz Title</UpperCase></BoxText>
    <BoxText><UpperCase>Question 1</UpperCase></BoxText>
    <BoxText><UpperCase>Prompt</UpperCase></BoxText>
    <BoxText><UpperCase>Answer Choices</UpperCase></BoxText>
    </Box>
    </>
    )};
};

export default StudentQuiz;