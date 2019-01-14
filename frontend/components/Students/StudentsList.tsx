import { Flex } from "@rebass/emotion";

export default ({ children }) => (
    <Flex
        ml={6}
        flexWrap="wrap"
        css={{ "overflow-y": "scroll", "min-height": "100px" }}
    >
        {children}
    </Flex>
);
