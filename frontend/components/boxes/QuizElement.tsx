import {QuizBar, Text} from "../design-system/primitives"; 
import {Button} from "@rebass/emotion"; 

export default ({quiz, addQuizToClass}) => (
    <QuizBar>
    <Text>{quiz.name}</Text>
    <Button onClick={() => addQuizToClass(quiz.id, quiz.name)}>Add</Button>
    </QuizBar>
)
