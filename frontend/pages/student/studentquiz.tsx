import Link from "next/link";
import {
  ButtonLink,
  Container,
} from "../../components/design-system";
import {Flex} from '@rebass/emotion'
import StudentQuiz from "../../components/StudentView/StudentQuiz";

const TakeQuiz = props => (
  <Container>
    <Link href="/student" prefetch>
      <ButtonLink variant="primary" m={2}>Back to Profile</ButtonLink>
    </Link>
    <ButtonLink variant="success" m={2}>Email Teacher</ButtonLink>
    <StudentQuiz />
  </Container>
);

export default TakeQuiz;
