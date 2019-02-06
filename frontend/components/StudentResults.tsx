import { Text } from "./design-system";
import { Box, Flex } from "@rebass/emotion";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

import { GET_STUDENT_QUIZZES } from '../queries';

const StudentResults = ({ id }) => (
    <>
        <Query query={GET_STUDENT_QUIZZES} variables={{ student_id: id }}>
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
                    console.log(data);
                    return (
                        <>
                            <Box m={3}> 
                                <Text p={2}>{data.student[0].first_name} {data.student[0].last_name}'s Quiz Results</Text>
                                <Text p={2}>Atomic Theory</Text>
                                <Text p={2}> Score: 18/20</Text>
                                {data.student[0].score.map(sc => (
                                    <Box m={3}>
                                        <Text p={2}> {sc.quizByquizId.name} </Text>
                                        <Text p={2}> Score: {sc.score} / {sc.quizByquizId.major_questions.length * 10}</Text>
                                    </Box>

                                ))}
                            </Box>
                        </>
                    )
                }
            }}
        </Query>
    </>
)
export default StudentResults
