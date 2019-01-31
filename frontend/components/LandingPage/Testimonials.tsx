//carey
import React from 'react';
import { css } from '@emotion/core'
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
    FlexColumns,
    LandingText,
    TestimonialStudentImage,
    TestimonialTeacherImage,
    TestimonialTeacherImageMobile,

    BoxText } from '../../components/design-system';

//import studentLaptop from '../../img/studentLaptop.jpg';

const Testimonials = (props) => {
    return(
        <>
            <Box my={4}>
            <LandingText fontSize = {5} css={{textAlign: "center"}}>Testimonials</LandingText>
            <FlexColumns
            css={css`
            height: auto;
            @media(max-width:1030px){
              flex-direction: column-reverse;
              align-items: center;
            }
          `}
            >
                  <Box m={3} p={3} width="400px">
                    <LandingText lineHeight = {1.5}>
                    "As a 12-year veteran teacher, I have seen a multitude of digital assessment technologies come and go.
                    From a practical standpoint, I like that QuizTime is easy and intuitive to use.
                    From a pedagocial perspective, I appreciate Quiztime's built in adaptivity giving each student a unique learning experience.
                    QuizTime is a revolution in formative assessment in that it supports differentation of content based on student ability."
                    </LandingText>
                    <br />
                    <LandingText lineHeight = {1.5}>
                        ~ Mrs. Schaffer, Atlanta, GA
                    </LandingText>
                    </Box>
                <Box m={3} p={3} width="400px"
                 css={css`
                 @media(max-width:763px){
                     margin-right:0;
                     padding-right:0;
                 }
                 `}
                 
                >
                    <TestimonialTeacherImage/>
                </Box>
            </FlexColumns>
            <FlexColumns>
                <Box m={3} p={3} width="550px">
                    <TestimonialStudentImage />
                </Box>
                 <Box m={3} p={3} width="400px">
                    <LandingText lineHeight = {1.5}>
                    "The thing I like best about QuizTime is that it helps me figure out the small parts of a concept that I don't understand.  
                    The quizzes have big and little questions.  
                    If I get a big question wrong, I can still try to figure it out by trying the little questions on the same concept.
                    I can also make up my points with the little questions and I like that."
                    </LandingText>
                    <br />
                    <LandingText lineHeight = {1.5}>
                        ~ Sara, Grade 8, Bellevue, WA
                    </LandingText>
                </Box>
 
                </FlexColumns>
            </Box>
        </>
    )
}

export default Testimonials;