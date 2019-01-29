//carey
import React from 'react';
import {Box, Flex} from '@rebass/emotion';
import { 
    Container, 
    Text,
    QuizBox, 
    UpperCase,
    BoxHolder,
    InfoSection,
    InfoBox,
    InfoTextBox,
    LrgText,
    HeaderInfoText,
    LandingText,
    TestimonialStudentImage,
    TestimonialTeacherImage,
    BoxText } from '../../components/design-system';

//import studentLaptop from '../../img/studentLaptop.jpg';

const Testimonials = (props) => {
    return(
        <>
            <Box>
            <LandingText fontSize = {4} css={{textAlign: "center"}}>Testimonials</LandingText>
            <InfoSection css={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <Box m={3} p={3} width="400px">
                    <LandingText>
                    "As a 12-year veteran teacher, I have seen a multitude of digital assessment technologies come and go.
                    From a practical standpoint, I like that QuizTime is easy and intuitive to use.
                    From a pedagocial perspective, I appreciate Quiztime's built in adaptivity giving each student a unique learning experience.
                    QuizTime is a revolution in formative assessment in that it supports differentation of content based on student ability."
                    </LandingText>
                    <br />
                    <LandingText>
                        ~ Mrs. Schaffer, Atlanta, GA
                    </LandingText>
                    </Box>
                <Box m={3} p={3} width="400px">
                    <TestimonialTeacherImage />
                </Box>
            </InfoSection>
            <InfoSection
                css={{
                    display: "flex",
                    flexWrap: "wrap"
                }}>
                <Box m={3} p={3} width="400px">
                    <TestimonialStudentImage />
                </Box>
                 <Box m={3} p={3} width="400px">
                    <LandingText>
                    "The thing I like best about QuizTime is that it helps me figure out the small parts of a concept that I don't understand.  
                    The quizzes have big and little questions.  
                    If I get a big question wrong, I can still try to figure it out by trying the little questions on the same concept.
                    I can also make up my points with the little questions and I like that."
                    </LandingText>
                    <br />
                    <LandingText>
                        ~ Sara, Grade 8, Bellevue, WA
                    </LandingText>
                </Box>
 
                </InfoSection>
            </Box>
        </>
    )
}

export default Testimonials;