import { Text } from "./design-system";
import { Box, Flex } from "@rebass/emotion";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

const StudentResults = () => (
    <>
        <Query >
            {({ loading, error, data }) => {
                if (error) return <p>{error.message}</p>;
                if (loading) {
                    return (
                        <ReactLoading
                            type="spin"
                            color="lightgray"
                            height="100px"
                            width="100px"
                        />
                    );
                }
                if (data) {
                    return (
                        
                        <Box>
                            <Text> Quiz Results </Text>
                            <Box p={3}>
                                <Text> Quiz </Text>
                                <Text> Score: </Text>
                            </Box>
                        </Box>
                    )
                }
            }}
        </Query>
    </>
)
export default StudentResults