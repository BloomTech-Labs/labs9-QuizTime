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
        <Flex 
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        >
            <Box m={2} p={4}
            css={{border: "1px solid black" }} 
            >
            <BoxText css={{textAlign: "center"}}>Getting Started with QuizTime</BoxText>
            <Flex        >
                <Box m={3} p={3}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText><UpperCase>Free</UpperCase></BoxText>
                </Box>
                <Box m={3} p={3}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText><UpperCase>Professional</UpperCase></BoxText>
                </Box>
            </Flex>
            </Box>
        </Flex>
        </>
    )
}

export default GetStarted;