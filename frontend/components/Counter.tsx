import * as React from "react";
import { Button, Text, Flex, Box } from "@rebass/emotion";

const Counter: React.SFC = () => {
	const [count, setCount] = React.useState(0);
	return (
		<>
			<Flex>
				<Box />
				<Box />
				<Box>
					<Text fontSize={4}>{count}</Text>
					<Button mx={1} bg='blue' onClick={() => setCount(count + 1)}>
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
