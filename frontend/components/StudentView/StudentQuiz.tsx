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
        {
            id: 3,
            prompt: "If you have a questions, who should you reach out to first?",
            answers: [
                { label: "a", response: "Instructor", correct: false },
                { label: "b", response: "Austin", correct: false },
                { label: "c", response: "Yer Mom", correct: false },
                { label: "d", response: "Project Manager", correct: true  }
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
                { label: "d", response: "Project Manager", correct: true  }
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
                { label: "d", response: "Project Manager", correct: true  }
            ],
            minorQuestions: []
        },
    ],
};


class StudentQuiz extends Component {
    //For development purposes.  Can remove later after retrieving data.
    state = {
        dummyData,
        currentQuestion: {
            question_id: 1, 
            answer_id: null
        },
        questionCount: 0,
        correctAnswers: 0,
    };


//function to move to the next question
nextQuestion = (e, id) => {
    console.log('sending', this.state.currentQuestion)
    this.setState((c) => ({
        ...c, 
        currentQuestion: {...c.currentQuestion, question_id: c.currentQuestion.question_id+1}
    }))
}

handleChange = (e, id) => {
    console.log('radio input', e.target.value, id)

    this.setState({
        currentQuestion: {question_id: id, answer_id: e.target.value}
    })
    // this.setState((c) => ({
    //     ...c, 
    //     currentQuestion: {...c.currentQuestion, answer_id: e.target.value}
    // }))
}

    render() {
        const { majorQuestions } = this.state.dummyData;
        return( 

            <>
            <Box m={4} width={3/4}>
            {/* need to get class name from props? */}
            <BoxText><UpperCase>{this.state.dummyData.name}</UpperCase></BoxText>
            <BoxText>{this.state.dummyData.details}</BoxText>
            </Box>
            {/* {console.log('current question id', this.state.currentQuestion.question_id)} */}
            {majorQuestions.slice(0,this.state.currentQuestion.question_id).map(q => (
                
                <Box width={3/4} m={4} p={2} key={q.id}>
                    <BoxText htmlFor={`major-question-${q.id}`}>
                        <UpperCase>Question {q.id}</UpperCase>
                    </BoxText>
                    <BoxText>
                       {q.prompt}
                    </BoxText>
                    {/* {console.log('q.answers', q.answers)} */}

                    {q.answers.map((a, index) => (
                            <Box key={index}>
                                <Flex>
                                <Input
                                    onChange = {(e)=>this.handleChange(e, q.id)}
                                    type="radio"
                                    name={`major-question-${q.id}-major-answer`}
                                    value={index + 1}
                                />
                                <BoxText>{a.response}</BoxText>
                                </Flex>
                            </Box>
                            ))}
                    <Flex justifyContent="flex-end">
                        <Button mx={5} variant = "error" onClick={(e) => this.nextQuestion(e, q.id)}>Submit and Next</Button>
                    </Flex>
                </Box>
            ))}
            </>
    )};
};

export default StudentQuiz;