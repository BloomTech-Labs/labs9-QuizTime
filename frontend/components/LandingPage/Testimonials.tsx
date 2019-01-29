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

const Testimonials = (props) => {
    return(
        <>
            <Box m={2} p={4} width={1, 1, 3/4}
            css={{border: "1px solid black" }} 
            >
            <BoxText css={{textAlign: "center"}}>Testimonials</BoxText>
            <Flex 
                flexDirection="column" 
                  >
                <Box m={3} p={3}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </BoxText>
                </Box>
                <Box m={3} p={3}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </BoxText>
                </Box>
            </Flex>
            </Box>
        </>
    )
}

export default Testimonials;