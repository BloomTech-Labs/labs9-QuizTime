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
  

class StudentQuiz extends Component {
    state = {
      majorQuestions: [],
    };

    render() {
        return(
            
    <>
    {/* we will need to pull in the quiz data from the database and render it as a quiz */}
    {/* will need to map over the quiz questions and render a box for each */}        
    <BoxText><UpperCase>Quiz Title</UpperCase></BoxText>
    <BoxText><UpperCase>Question 1</UpperCase></BoxText>
    <BoxText><UpperCase>Prompt</UpperCase></BoxText>
    <BoxText><UpperCase>Answer Choices</UpperCase></BoxText>
    </>
    )};
};

export default StudentQuiz;