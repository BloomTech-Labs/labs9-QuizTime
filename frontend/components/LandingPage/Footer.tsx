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
    BoxText } from '../../components/design-system';

const Footer = (props) => {
    return(
        <>
            <Box bg="gray.0" p={3}>
            <InfoSection my={4}
            css={{
                display: "flex",
                flexWrap: "wrap",   
            }}
            >
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
                </InfoSection>
            </Box>
        </>
    )
}

export default Footer;