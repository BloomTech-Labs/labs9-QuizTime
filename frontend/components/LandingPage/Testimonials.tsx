//carey
import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { 
    Container, 
    Text,
    QuizBox, 
    UpperCase,
    BoxHolder,
    BoxText } from '../../components/design-system';

//import studentLaptop from '../../img/studentLaptop.jpg';

const Testimonials = (props) => {
    return(
        <>
            <Container p={3} m={3} css={{backgroundColor: "WhiteSmoke"}}>
            <BoxText css={{textAlign: "center"}}>Testimonials</BoxText>
                <Box m={3} p={3}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                    "The thing I like best about QuizTime is that it helps me figure out the parts of a concept that I don't understand.  
                    The quizzes have big and little questions.  
                    If I get a big question wrong, I can still try to figure it out by trying the little questions on the same concept.
                    I can also make up my points with the little questions and I like that."
                    </BoxText>
                    <BoxText>
                        ~ Sara, Grade 8, Bellevue, WA
                    </BoxText>
                    <BoxText>
                    "QuizTime helps me figure out what I know and what I don't know. 
                    I like that I can get back points. "
                    </BoxText>
                    <BoxText>
                        ~ Alex, Grade 5, Springfield, MA
                    </BoxText>
                {/* <img src={studentLaptop} />         */}

                </Box>
                <Box m={3} p={3}
                css={{border: "1px solid black", borderRadius: "6px" }} >
                    <BoxText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </BoxText>
                </Box>
            </Container>
        </>
    )
}

export default Testimonials;