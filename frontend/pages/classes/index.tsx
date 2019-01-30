import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import Link from "next/link";
import { Box, Flex } from "@rebass/emotion";
import ClassBox from "../../components/boxes/classBox/classBox";
import Layout from "../../components/Layout";
import securePage from "../../hocs/securePage";
import AddClass from "../../components/forms/AddClass";
import { ALL_CLASSES_QUERY } from '../../queries';
import { Container } from '../../components/design-system'; 


const CardHolder = styled.div`
  display: flex;
  flexWrap: wrap;
  justify-content: flex-start;
`;

const Holder = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 20px 0;
`;


const Classes = () => (
  <Layout>
    <Container mx={4}>
      <Holder>
          <AddClass />
      </Holder>
    <CardHolder>
      <Holder>
        <Query query={ALL_CLASSES_QUERY}>
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
    </Container>
  </Layout>
);

export default securePage(Classes);
