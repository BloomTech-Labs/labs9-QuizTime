import * as React from "react";
import { Box, Text, Button, Flex } from "@rebass/emotion";
import styled from "@emotion/styled";

import InputArea from "./InputArea";

const FormContainer = styled.div`
    background: white;
    width: 500px;
    margin: 15px;
    padding: 10px;
    border: 1px solid #B4D7F0;
    border-radius: 10px;
    border-bottom: 10px solid #B4D7F0;
`

const InputDiv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
  `

const HeaderText = props => 
    <Text {...props} 
    fontFamily="system-ui"
    fontSize={3} 
    color="blue0"
    p='10px'
    />;

const FormText = props => 
    <Text {...props} 
    fontFamily="system-ui"
    fontSize={1} 
    color="blue0"
    p='10px'
    />;

const FormButton = props =>
    <Button {...props}
    />;

    const AddStudent: React.SFC = () => {

        return (
            <>         
                <FormContainer>
                    <Box>   
                        <HeaderText>Please Enter Student Information</HeaderText>
                    </Box>
                    <Flex
                        justifyContent='left'
                    >
                        <InputDiv>
                            <FormText>First Name</FormText>
                            <FormText>Last Name</FormText>
                            <FormText>Email</FormText>
                        </InputDiv>
                        <InputDiv>
                            {/* input first name */}
                            <InputArea /> 
                            {/* input last name */}
                            <InputArea />
                            {/* input email */}
                            <InputArea />
                        </InputDiv>
                    </Flex>
                    <Flex
                        justifyContent = 'flex-end'
                    >
                        <FormButton variant = 'primary'>
                                Submit
                        </FormButton>
                    </Flex>
                </FormContainer>
            </>
        );
    };
    
    export default AddStudent;