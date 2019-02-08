import React, { Component } from 'react';
import { getStudentToken } from '../../utils/auth';
import Link from 'next/link';
import { ButtonLink, Container } from '../../components/design-system';
import { Flex } from '@rebass/emotion';
import StudentQuiz from '../../components/StudentView/StudentQuiz';

const url = '/api/student-proxy';

class QuizPage extends Component {
  state = {
    quiz: null,
  };

  componentDidMount() {
    this.getQuiz();
  }

  getQuiz = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        type: 'get_quiz_query',
        token: getStudentToken(),
      }),
    };

    fetch(url, options)
      .then(res => res.json())
      .then(({ data }) => this.setState({ quiz: data.quiz[0] }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container mt={3}>
        <Link href='/student' prefetch>
          <ButtonLink variant='primary' m={2}>
            Back to Profile
          </ButtonLink>
        </Link>
        <ButtonLink variant='success' m={2}>
          <a style={{textDecoration: 'none', color: 'white'}}href={this.state.quiz && `mailto:${this.state.quiz.teacherByteacherId.email}`}>Email Teacher</a>
        </ButtonLink>
        <StudentQuiz />
      </Container>
    );
  }
}

export default QuizPage;
