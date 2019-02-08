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
                    return (
                        <>
                            <Box m={3}>
                                <Text p={3}>{data.student[0].first_name} {data.student[0].last_name}'s Quiz Results</Text>
                                <Box  m={3} p={2} css={{ border: "1px solid lightgray" }}>
                                    <Text p={2}>Atomic Theory</Text>
                                    <Text p={2}> Score: 18/20</Text>
                                </Box>
                                <Box  m={3} p={2} css={{ border: "1px solid lightgray" }}>
                                    <Text p={2}>Social Skills</Text>
                                    <Text p={2}> Score: 4/20</Text>
                                </Box>
                                <Box  m={3} p={2} css={{ border: "1px solid lightgray" }}>
                                    <Text p={2}>Particle Physics</Text>
                                    <Text p={2}> Score: 19/20</Text>
                                </Box>
                                <Box  m={3} p={2} css={{ border: "1px solid lightgray" }}>
                                    <Text p={2}>Fashion Sense</Text>
                                    <Text p={2}> Score: 1/20</Text>
                                </Box>
                                {data.student[0].score.map(sc => (
                                    <Box m={3} p={2} css={{ border: "1px solid lightgray" }}>
                                        <Text p={2}> {sc.quiz.name} </Text>
                                        <Text p={2}> Points: {sc.score} / {sc.total} </Text>
                                        <Text p={2}> Score: {(sc.score/sc.total)*100}% </Text>
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
