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
    BoxText } from '../../components/design-system';

const Footer = (props) => {
    return(
        <>
            <Box m={2} p={4} css={{width: "100%", border: "1px solid black"}}
            >
            <Flex 
                flexDirection="column" 
                alignItems="center"
                justifyContent="space-between"
                  >
                <Box m={3} p={3} width={[1,1,1/2]}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                        <UpperCase>
                            Share
                        </UpperCase>
                    </BoxText>
                    <BoxText>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </BoxText>
                </Box>
                <Box m={3} p={3} width={[1,1,1/2]}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                        <UpperCase>
                        Development Team
                        </UpperCase>
                    </BoxText>
                    <BoxText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </BoxText>
                </Box>
                <Box m={3} p={3} width={[1,1,1/2]}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                        <UpperCase>
                        Contact
                        </UpperCase>
                    </BoxText>
                    <BoxText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </BoxText>
                </Box>

            </Flex>
            </Box>
        </>
    )
}

export default Footer;