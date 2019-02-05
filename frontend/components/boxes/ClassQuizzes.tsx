import { QuizBar, Text, UniButton } from "../design-system/primitives";
import { Box, Flex } from "@rebass/emotion";

const ClassQuizzes = ({ quiz }) => (
  <>
    <Box my={3} css={{ borderBottom: "1px solid lightgray" }}>
      <Flex
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Text m={2}>{quiz.name}</Text>
        <Box>
          <UniButton m={2} bg="green.1" fontSize={0}>Assign</UniButton>
        </Box>
      </Flex>
    </Box>
  </>
)
export default ClassQuizzes
