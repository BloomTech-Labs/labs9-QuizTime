import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "@emotion/styled";
import ClassBox from "../components/boxes/classBox/classBox";

const ALL_CLASSES_QUERY = gql`
	query ALL_CLASSES_QUERY {
		class{
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
	width: 1060px;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
`;

export default () => (
	<CardHolder>
		<Holder>
			<Query query={ALL_CLASSES_QUERY}>
				{({ loading, error, data }) => {
					if (error) return <p>{error.message}</p>;
					if (loading) return <p>...loading</p>;
					if (data) {
						return data.class.map(className => <ClassBox className={className} />);
					}
				}}
			</Query>
		</Holder>
	</CardHolder>
);