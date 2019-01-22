import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import ClassBox from "../../components/boxes/classBox/classBox";
import Layout from "../../components/Layout";
import securePage from '../../hocs/securePage'
import AddClass from "../../components/forms/AddClass";

const ALL_CLASSES_QUERY = gql`
	query ALL_CLASSES_QUERY {
		class {
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

const Classes = () => (
<Layout>
  <AddClass />
  <CardHolder>
    <Holder>
      <Query query={ALL_CLASSES_QUERY} >
        {({ loading, error, data }) => {
          if (error) return <p>{error.message}</p>;
          if (loading) return <p>...loading</p>;
          if (data) {
            return data.class.map(c => <ClassBox key={c.id} className={c} />);
          }
        }}
      </Query>
    </Holder>
  </CardHolder>
</Layout>
);

export default securePage(Classes)
