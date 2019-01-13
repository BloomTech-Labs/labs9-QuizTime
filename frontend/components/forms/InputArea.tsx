import * as React from "react";
import { Box } from "@rebass/emotion";
import styled from "@emotion/styled";

const InputField = styled.input`
    width: 80px
    height: 20px;
    padding: 10px;
    margin: 4%;
    font-family: "system-ui";
    font-size: 14px;
    border: 1px solid #4a9eda;
    border-radius: 5px;
    color: #0077cc;
    &::-webkit-input-placeholder{
        color: #0077cc;
        font-size: 14px;
        opacity: .7
    }
`
const InputArea: React.SFC = () => {

    /* We will have a method to post new items to the IDBDatabase.  
    This will be specific to adding new students, new quiz questions,
    and new quiz answers. */

	return (
        <>           
            <Box>
                <InputField placeholder = ". . ."/>
            </Box>
        </>
	);
};

export default InputArea;