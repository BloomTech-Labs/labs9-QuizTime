import gql from "graphql-tag";
import { Query } from "react-apollo";
import Layout from "../../components/Layout";
import securePage from '../../hocs/securePage'

const ALL_QUIZZES_QUERY = gql`
	query STUDENT_QUIZ_QUESTIONS_QUERY {
		quiz {
			id
			name
      major_questions {
        prompt
        answers {
          response
        }
      }
		}
	}
`;

const Quizzes = () => (
  <Layout>
    <Query query={ALL_QUIZZES_QUERY}>
      {({ loading, error, data }) => {
        if (error) return <p>{error.message}</p>;
        if (loading) return <p>...loading</p>;
        if (data) {
          return data.quiz.map(q => (
            <div key={q.id}>
              {q.name}
            </div>
          ));
        }
      }}
    </Query>
  </Layout>
);

export default securePage(Quizzes)
