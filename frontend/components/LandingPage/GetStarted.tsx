//carey
import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { 
    Container, 
    Text,
    QuizBox, 
    UpperCase,
    BoxText } from '../../components/design-system';

const GetStarted = (props) => {
    return(
        <>
            <Box m={2} p={4} width={[1, 1, 3/4]}
            css={{border: "1px solid black" }} 
            >
            <BoxText css={{textAlign: "center"}}>Getting Started with QuizTime</BoxText>
            <Flex
                flexDirection="column" 
                alignItems="center"
                justifyContent="space-between"
            >
                <Box m={3} p={3} width={[1, 1/2, 1/2]}
                css={{
                     border: "1px solid black", 
                     borderRadius: "6px" }} >
                    <BoxText><UpperCase>Free</UpperCase></BoxText>
                    <BoxText>Users can sign up and make ten quizzes for free!</BoxText>
                </Box>
                <Box m={3} p={3} width={[1, 1/2, 1/2]}
                css={{
                    border: "1px solid black", 
                    borderRadius: "6px" }} >
                    <BoxText>
                        <UpperCase>Professional</UpperCase>
                    </BoxText>
                    <BoxText>
                        Experience the full power of QuizTime with our professional version, which includes unlimited quizzes for a monthly fee of $9.95.
                    </BoxText>
                </Box>
            </Flex>
            </Box>
        </>
    )
}

export default GetStarted;