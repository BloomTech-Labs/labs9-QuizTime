import * as React from "react";
import { Flex, Box, Text, Button } from "@rebass/emotion";
import styled from "@emotion/styled";

const BoxHolder = styled(Box)`
    border: 1px solid black;
    border-radius: 5px;
    width: 600px;
    height: 300px;
    margin: 5px;
`;

const TextContainer = styled(Box)`
    margin: 20px;
`

const InputField = styled.textarea`
    width: 500px;
    height: 120px;
    margin: 70px 50px 50px 50px;
`

const FormText = props => <Text {...props} fontFamily = "sans" />;

const TextArea: React.SFC = () => {

    /* We will have a method to post new items to the IDBDatabase.  
    This will be specific to adding new students, new quiz questions,
    and new quiz answers. */

	return (
        <>     
        <BoxHolder>       
            <Flex 
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
            >  
                <TextContainer> 
                    <FormText>Please enter your quiz question</FormText>
                </TextContainer>
                <Box>
                    <InputField 
                        placeholder = "enter your text"
                    />
                </Box>
            </Flex>
        </BoxHolder>
        </>
	);
};

export default TextArea;