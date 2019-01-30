//carey
import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { 
    Container, 
    Text,
    QuizBox, 
    UpperCase,
    InfoSection,
    FlexColumns,
    LandingText,
    BoxText } from '../../components/design-system';

const GetStarted = (props) => {
    return(
        <>
            <Box my={5}>
            <LandingText color="blue.1" fontSize = {6} css={{textAlign: "center"}}>Getting Started</LandingText>
            <FlexColumns>
                <Box my={3} mx={5} p={4} bg="blue.2" width="360px" 
                css={{
                     border: "1px solid white", 
                     height: "360px", 
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center"
                     }} >
                    <LandingText fontWeight = {3} color="white" fontSize={5} p={2}>Free Plan</LandingText>
                    <LandingText fontWeight = {3} fontSize ={4} color="white" lineHeight = {1.5} p={4}>
                    Sign up now and make ten quizzes for free!</LandingText>
                </Box>
                <Box my={3} mx={5} p={4} bg="blue.2" width="360px" 
                css={{
                    border: "1px solid white", 
                    height: "360px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                     }} >
                    <LandingText fontWeight = {3} color="white" fontSize={5} p={2}>Pro Plan</LandingText>
                    <LandingText fontWeight = {3} fontSize ={4} color="white" lineHeight = {1.5} p={4}>
                        Get unlimited quizzes for a low monthly fee of $9.95.
                    </LandingText>
                </Box>
                </FlexColumns>
            </Box>
        </>
    )
}

export default GetStarted;