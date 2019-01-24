import React, { Component } from 'react';
import Link from "next/link";
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
  
class StudentView extends Component {
    state = {
      name: '',
    };

    render() {
        return(
    <>
        <BoxText><UpperCase>Student Name</UpperCase></BoxText>
        <BoxText><UpperCase>Classes</UpperCase></BoxText>
        <BoxText><UpperCase>Average Score</UpperCase></BoxText>
        <BoxText><UpperCase>Quizzes</UpperCase></BoxText>
    </>
    )};
};

export default StudentView;
