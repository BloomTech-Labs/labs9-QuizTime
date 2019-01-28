import Link from "next/link";

import {
    Button,
    Container, 
  } from "../../components/design-system";
  
import StudentQuiz from "../../components/StudentView/StudentQuiz";

  
  const TakeQuiz = props => (
        <>
            <Container>
                <Link href="/student" prefetch>
                    <Button variant = "primary" m={2}>Back to Profile</Button>
                </Link>
                <Button variant = "success" m={2}>Email Teacher</Button>
            {/* StudentQuiz component should show the quiz the student is supposed to take */}
                <StudentQuiz />
            </Container>
        </>
  );
  
  export default TakeQuiz;
