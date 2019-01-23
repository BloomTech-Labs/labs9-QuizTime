import {
    Text,
    BoldText,
    UpperCase,
    Container,
    BoxText,
    BoxHolder,
    Button
  } from "../components/design-system";
  
  const Student = props => (
        <Container p={3} css={{ maxWidth: "880px" }}>
        
                <BoxText><UpperCase>Name</UpperCase></BoxText>
                <BoxText><UpperCase>Classes</UpperCase></BoxText>
                <BoxText><UpperCase>Average Score</UpperCase></BoxText>
                <BoxText><UpperCase>Quizzes</UpperCase></BoxText>

                <Button variant = "primary" m={2}>Take Quiz</Button>
                <Button variant = "success" m={2}>Email Teacher</Button>
        </Container>
  );
  
  export default Student;