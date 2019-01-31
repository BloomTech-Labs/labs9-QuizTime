import {QuizBar, Text} from "../design-system/primitives";
import {Box, Flex} from "@rebass/emotion";

const ClassQuizzes = ({quiz}) => (
    <>
      <Box>
        <Text my={2}>{quiz.name}</Text>
      </Box>
    </>
)
export default ClassQuizzes
