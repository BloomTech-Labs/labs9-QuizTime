import {QuizBar, Text} from "../design-system/primitives"; 
export default ({id, quiz}) => (
    <QuizBar>
    <Text>{quiz.name}</Text>
    <Button variant="Success">Add</Button>
    </QuizBar>
)
