//carey
import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { 
    Container, 
    Text,
    QuizBox, 
    UpperCase,
    InfoSection,
    LandingText,
    BoxText } from '../../components/design-system';

const GetStarted = (props) => {
    return(
        <>
            <Box my={5}>
            <InfoSection css={{
                display: "flex",
                flexWrap: "wrap",
                border: "1px solid white",
            }}>
                <Box my={3} mx={5} p={3} bg="green.0" width="400px" 
                css={{
                     border: "1px solid white", 
                     borderRadius: "100%",
                     height: "400px", 
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center"
                     }} >
                    <LandingText fontWeight = {3} color="blue.1" fontSize={5} p={2}>Free Plan</LandingText>
                    <LandingText fontWeight = {3} fontSize ={4} color="blue.1" lineHeight = {1.5} p={4}>
                    Sign up now and make ten quizzes for free!</LandingText>
                </Box>
                <Box my={3} mx={5} p={3} bg="green.0" width="400px" 
                css={{
                    border: "1px solid white", 
                    borderRadius: "100%",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                     }} >
                    <LandingText fontWeight = {3} color="blue.1" fontSize={5} p={2}>Professional Plan</LandingText>
                    <LandingText fontWeight = {3} fontSize ={4} color="blue.1" lineHeight = {1.5} p={4}>
                        Get unlimited quizzes for a low monthly fee of $9.95.
                    </LandingText>
                </Box>
                </InfoSection>
            </Box>
        </>
    )
}

export default GetStarted;