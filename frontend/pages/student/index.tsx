import Link from "next/link";

import StudentView from "../../components/StudentView/StudentView";

import {
    Button,
    Container,
    StudentViewNav,
  } from "../../components/design-system";
  
  const Student = props => (
        <>
        <Container>
            <StudentViewNav>
                <Link href="student/studentquiz" prefetch>
                    <Button variant = "primary" m={2}>Take Quiz</Button>
                </Link>
                <Button variant = "success" m={2}>Email Teacher</Button>
            </StudentViewNav>
            {/* StudentView is the imported component with student detail */}
                <StudentView /> 
        </Container>
        </>
  );
  
  export default Student;