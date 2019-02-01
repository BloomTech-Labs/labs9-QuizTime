import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { css } from "@emotion/core";
import { 
    Container, 
    Text,
    QuizBox, 
    UpperCase,
    InfoSection,
    LandingText,
    FlexColumns,
    List, 
    ListItem,
    BoxText } from '../../components/design-system';

    
const Footer = (props) => {
    return(
        <>
            <Box bg="blue.2" p={2} color="white">
            <FlexColumns my={3}>
                <Box m={3} p={2} width="280px">
                    <Text>
                        <UpperCase fontWeight = {3} fontSize ={3} lineHeight = {1.5} p={2}>
                            Follow Us
                        </UpperCase>
                    </Text>

                    <List>
                        <ListItem>Facebook</ListItem>
                        <ListItem>Twitter</ListItem>
                    </List>
                </Box>
                <Box m={3} p={2} width="280px">
                    <Text>
                        <UpperCase fontWeight = {3} fontSize ={3} lineHeight = {1.5} p={2}>
                        About Us
                        </UpperCase>
                    </Text>
                    <LandingText color="white" fontWeight = {3} fontSize ={3} lineHeight = {1.5} p={2}>
                        Our team of educational consultants and developers works hard to deliver high quality academic software.
                        Please contact us at any time with questions or comments. 
                    </LandingText>
                </Box>
                <Box m={3} p={2} width="280px">
                    <Text>
                        <UpperCase fontWeight = {3} fontSize ={3} lineHeight = {1.5} p={2}>
                        Links
                        </UpperCase>
                    </Text>
                    <List>
                        <ListItem>NCTM</ListItem>
                        <ListItem>ISTE</ListItem>
                        <ListItem>MassCUE</ListItem>
                        <ListItem>Educators Technology</ListItem>
                    </List>
                </Box>
                </FlexColumns>
                <Flex
                    flexDirection= "column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <LandingText color="white" fontWeight={3} fontSize ={2} lineHeight = {1.5} p={3}>
                        Copyright 2019, QuizTime Development Team
                    </LandingText>
                </Flex>
            </Box>
        </>
    )
}

export default Footer;