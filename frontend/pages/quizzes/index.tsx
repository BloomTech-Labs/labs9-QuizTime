import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';
import QuizBox from '../../components/boxes/quizBox/quizBox';
import AddBox from '../../components/boxes/addBox/addBox';
import Link from 'next/link';
import Layout from '../../components/Layout';
import securePage from '../../hocs/securePage';
import { Label } from '../../components/design-system';
import { Box, Flex } from '@rebass/emotion';
import { css } from '@emotion/core';
import ReactLoading from 'react-loading'
const ALL_QUIZZES_QUERY = gql`
  query ALL_QUIZZES_QUERY {
    quiz {
      id
      name
    }
  }
`;
const CardHolder = styled.div`
  display: flex;
  flexwrap: wrap;
  justify-content: flex-start;
  margin-top: 15px;
`;

const Holder = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ATag = styled.a`
  text-decoration: none;
`;

const Quizzes = () => (
  <Layout>
    <Box my={3} mx={5} py={3}>
      <Label m={3}>Your Quizzes</Label>
      <CardHolder>
        <Holder>
          <Link href='/quizzes/add-quiz'>
            <ATag>
              <AddBox />
            </ATag>
          </Link>
          <Query query={ALL_QUIZZES_QUERY}>
            {({ loading, error, data }) => {
              if (error) return <p>{error.message}</p>;
              if (loading)
                return (
                  <Flex justifyContent='center' alignItems='center' p={2} m={5}>
                    <ReactLoading
                      type='spin'
                      color='lightgray'
                      height='100px'
                      width='100px'
                    />
                  </Flex>
                );
              if (data) {
                return data.quiz.map(q => <QuizBox key={q.id} quiz={q} />);
              }
            }}
          </Query>
        </Holder>
      </CardHolder>
    </Box>
  </Layout>
);

export default securePage(Quizzes);
