import {QuizBar, Text} from "../design-system/primitives"; 

const ClassQuizzes = ({quizzes}) => (
    <>
    {quizzes.map(quiz => <Text>{quiz.quiz_name}</Text>)}
    </>
)
export default ClassQuizzes
