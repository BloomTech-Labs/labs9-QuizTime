import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

function createClient() {
	return new ApolloClient({
		uri: "https://quiztime-hasura.herokuapp.com/v1alpha1/graphql"
	});
}

export default withApollo(createClient);
