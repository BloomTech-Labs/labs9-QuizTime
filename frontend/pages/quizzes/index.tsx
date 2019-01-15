import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import QuizBox from "../../components/boxes/quizBox/quizBox";
import AddBox from "../../components/boxes/addBox/addBox";


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
	justify-content: flex-end;
`;

const Holder = styled.div`
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
`;

const Quizzes = () => (
  <CardHolder>
    <Holder>
      <AddBox />
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
);

export default Quizzes
