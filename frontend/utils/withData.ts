import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { getIdToken } from './auth';

// function createClient() {
// 	return new ApolloClient({
// 		uri: "https://quiztime-hasura.herokuapp.com/v1alpha1/graphql"
// 	});
// }

const httpLink = createHttpLink({
  uri: "https://quiztime-hasura.herokuapp.com/v1alpha1/graphql",
  credentials: "include"
})

const authLink = setContext((_, { headers }) => {
  const token = getIdToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

function createClient() {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

export default withApollo(createClient);
