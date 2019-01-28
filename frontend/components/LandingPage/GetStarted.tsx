//carey
import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { 
    Container, 
    Text,
    QuizBox, 
    BoxText } from '../../components/design-system';

const GetStarted = (props) => {
    return(
        <>
        <Container><BoxText>Getting Started with QuizTime</BoxText></Container>
        <Flex>
            <Box p={3}>
                <BoxText>Free</BoxText>
            </Box>
            <Box p={3}>
                <BoxText>Professional</BoxText>
            </Box>
        </Flex>
        </>
    )
}

export default GetStarted;