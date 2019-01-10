import * as React from "react";
import { Flex, Box, Text } from "@rebass/emotion";
import styled from "@emotion/styled";

const BoxHolder = props =>
  <Box
    {...props} 
    // rebass primitive styles
    m='10px' 
    bg="blue"
    // extensions from rebass 
    css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        border: '1px solid black',
        borderRadius: '10px',
    }}
  />

const FormText = props => 
<Text {...props} 
    fontFamily="mono"
    fontSize={5} 
    color="white"
    p='10px'
    />;

const TextInputField = styled.textarea`
    width: 80%;
    height: 140px;
    padding: 10px;
    margin: 6%;
    font-family: "mono";
    font-size: 16px;
    border: 1px solid 0077cc;
    border-radius: 10px;
    color: #0077cc;
    &::-webkit-input-placeholder{
        color: #0077cc;
        font-size: 16px;
        opacity: .7
    }
`
const TextArea: React.SFC = () => {

    /* We will have a method to post new items to the IDBDatabase.  
    This will be specific to adding new students, new quiz questions,
    and new quiz answers. */

	return (
        <>           
                <FormText>Please enter your quiz question</FormText>
                <Box>
                    <TextInputField 
                        placeholder = "please enter your text"
                    />
                </Box>
        </>
	);
};

export default TextArea;