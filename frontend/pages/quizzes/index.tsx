import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import QuizBox from "../../components/boxes/quizBox/quizBox";
import AddBox from "../../components/boxes/addBox/addBox";
import Link from "next/link";
import Layout from "../../components/Layout";
import securePage from "../../hocs/securePage";

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
  justify-content: flex-start;
`;

const Holder = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
`;

const ATag = styled.div`
  text-decoration: none;
`;
const Quizzes = () => (
  <Layout>
    <CardHolder>
      <Holder>
        <Link href="/quizzes/add-quiz">
          <a>
            <AddBox />
          </a>
        </Link>
        <Query query={ALL_QUIZZES_QUERY}>
          {({ loading, error, data }) => {
            if (error) return <p>{error.message}</p>;
            if (loading) return <p>...loading</p>;
            if (data) {
              return data.quiz.map(q => <QuizBox key={q.id} quiz={q} />);
            }
          }}
        </Query>
      </Holder>
    </CardHolder>
  </Layout>
);

export default securePage(Quizzes);
