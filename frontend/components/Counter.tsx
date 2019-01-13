import React, { useState } from "react";
import { Button, Text, Flex, Box } from "@rebass/emotion";

export interface PersonProps {
	id: number;
	firstName: string;
	lastName: string;
	age?: number;
}

const Person: React.SFC<PersonProps> = ({ id, firstName, lastName, age }) => (
	<div>
		<Text fontFamily='mono' fontSize={0}>
			{id}
		</Text>
		<Text fontFamily='sans' fontSize={3}>
			{firstName}
		</Text>
		<Text fontFamily='mono' fontSize={7} color='green0'>
			{lastName}
		</Text>
		{age && (
			<Text fontFamily='mono' fontSize={3}>
				{age}
			</Text>
		)}
	</div>
);

const Counter: React.FunctionComponent = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<Flex>
				<Box />
				<Box />
				<Box>
					<Person id={1} firstName='Ada' lastName='Lovelace' />
					<Text fontFamily='sans' fontSize={4}>
						{count}
					</Text>
					<Button mx={1} variant='primary' onClick={() => setCount(count + 1)}>
						+
					</Button>
					<Button mx={1} bg='red' onClick={() => setCount(count - 1)}>
						-
					</Button>
				</Box>
			</Flex>
		</>
	);
};

export default Counter;
