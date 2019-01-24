import Link from "next/link";

import {
    Button,
    Container, 
    StudentViewNav
  } from "../../components/design-system";
  
import StudentQuiz from "../../components/StudentView/StudentQuiz";

  
  const TakeQuiz = props => (
        <>
            <Container>
            <StudentViewNav>
                <Link href="/student" prefetch>
                    <Button variant = "primary" m={2}>Back to Profile</Button>
                </Link>
                <Button variant = "success" m={2}>Email Teacher</Button>
            </StudentViewNav>
            {/* StudentQuiz component should show the quiz the student is supposed to take */}
                <StudentQuiz />
            </Container>
        </>
  );
  
  export default TakeQuiz;
