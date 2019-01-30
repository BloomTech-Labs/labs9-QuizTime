//carey

//carey
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
    FlexColumns,
    BoxText } from '../../components/design-system';

const Footer = (props) => {
    return(
        <>
            <Box bg="green.1" p={3}>
            <FlexColumns my={4}>
                <Box m={4} p={3} width="280px">
                    <Text>
                        <UpperCase fontWeight = {2} fontSize ={3} lineHeight = {1.5} p={3}>
                            Share
                        </UpperCase>
                    </Text>
                    <LandingText fontWeight = {2} fontSize ={3} lineHeight = {1.5} p={3}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </LandingText>
                </Box>
                <Box m={4} p={3} width="280px">
                    <BoxText>
                        <UpperCase fontWeight = {2} fontSize ={3} lineHeight = {1.5} p={3}>
                        Development
                        </UpperCase>
                    </BoxText>
                    <LandingText fontWeight = {2} fontSize ={3} lineHeight = {1.5} p={3}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </LandingText>
                </Box>
                <Box m={4} p={3} width="280px">
                    <BoxText>
                        <UpperCase fontWeight = {2} fontSize ={3} lineHeight = {1.5} p={3}>
                        Contact
                        </UpperCase>
                    </BoxText>
                    <LandingText fontWeight = {2} fontSize ={3} lineHeight = {1.5} p={3}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </LandingText>
                </Box>
                </FlexColumns>
            </Box>
        </>
    )
}

export default Footer;