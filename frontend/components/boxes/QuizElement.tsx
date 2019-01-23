import {QuizBar, Text} from "../design-system/primitives"; 
export default ({quiz}) => (
    <QuizBar>
    <Text>{quiz.name}</Text>
    <Button variant="Success">Add</Button>
    </QuizBar>
)
