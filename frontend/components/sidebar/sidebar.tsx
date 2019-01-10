import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Text, Box} from "@rebass/emotion";

const SideBarHolder = styled(Box)`
    border: 1px solid black; 
    border-radius: 5px; 
    width: 250px; 
`;

const BoxText = props => <Text {...props} fontFamily="sans" />;

const SideBar: React.SFC = () => {
    return (
        <>
        <SideBarHolder>
        <Link href='/quizzes' prefetch>
			<BoxText>quizzes</BoxText>
		</Link>
		<Link href='/classes' prefetch>
			<BoxText>classes</BoxText>
		</Link>
		<Link href='/billing' prefetch>
			<BoxText>billing</BoxText>
		</Link>
		<Link href='/settings' prefetch>
			<BoxText>settings</BoxText>
		</Link>
        </SideBarHolder>
        </>
    )
}
export default SideBar;
