import Link from "next/link";

import StudentView from "../../components/StudentView/StudentView";

import {
    Button,
    Container
  } from "../../components/design-system";
  
  const Student = props => (
        <>
            <Container p={3} css={{ maxWidth: "880px" }}>
                <StudentView />
                <Link href="student/studentquiz" prefetch>
                    <Button variant = "primary" m={2}>Take Quiz</Button>
                </Link>
                <Button variant = "success" m={2}>Email Teacher</Button>

            </Container>
        </>
  );
  
  export default Student;