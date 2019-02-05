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
            <FlexColumns
             my={3}
             css={css`
             @media(max-width:680px){
                 flex-direction: column;
                 align-items:center;
             }
             `}>
                <Box 
                m={3} 
                p={2} 
                width="180px"
                css={css`
                @media(max-width:763px){
                    margin:0px;
                    padding:0px
                }
                @media(max-width:680px){
                    padding:5px;
                    margin:5px
                }
                `}>
                    <Text>
                        <UpperCase fontWeight = {0} fontSize ={3} lineHeight = {1.5} p={2}>
                            Follow Us
                        </UpperCase>
                    </Text>

                    <List>
                        <ListItem fontWeight={0}>Facebook</ListItem>
                        <ListItem fontWeight={0}>Twitter</ListItem>
                    </List>
                </Box>
                <Box 
                m={3} 
                p={2} 
                width="280px"
                css={css`
                @media(max-width:763px){
                    margin:0px;
                    padding:0px
                }
                @media(max-width:680px){
                    padding:5px;
                    margin:5px
                }
                `}>
                    <Text>
                        <UpperCase fontWeight = {0} fontSize ={3} lineHeight = {1.5} p={2}>
                        About Us
                        </UpperCase>
                    </Text>
                    <LandingText color="white" fontWeight = {0} fontSize ={3} lineHeight = {1.5} p={2}>
                        QuizTime enables educators to create engaging quizzes with ease. Our simple quiz creator gives educators the ability to 
                        send finished quizzes out to there students from the individual class. We want to save educators time on this at sometimes tedious 
                        process.
                    </LandingText>
                </Box>
                <Box 
                m={3} 
                p={2} 
                width="180px"
                css={css`
                @media(max-width:763px){
                    margin:0px;
                    padding:0px
                }
                @media(max-width:680px){
                    padding:5px;
                    margin:5px
                }
                `}>
                    <Text>
                        <UpperCase fontWeight = {0} fontSize ={3} lineHeight = {1.5} p={2} css={css `border-bottom: 5px solid #70e89d `}>
                        Links
                        </UpperCase>
                    </Text>
                    <List>
                        <ListItem fontWeight={0}>NCTM</ListItem>
                        <ListItem fontWeight={0}>ISTE</ListItem>
                        <ListItem fontWeight={0}>MassCUE</ListItem>
                        <ListItem fontWeight={0}>Educators Technology</ListItem>
                    </List>
                </Box>
                </FlexColumns>
                <Flex
                    flexDirection= "column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <LandingText color="white" fontWeight={0} fontSize ={2} lineHeight = {1.5} p={3}>
                        Copyright 2019, QuizTime Development Team
                    </LandingText>
                </Flex>
            </Box>
        </>
    )
}

export default Footer;