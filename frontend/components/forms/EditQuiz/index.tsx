import { useState } from "react";
import { Query } from "react-apollo";

import NameForm from "./NameForm";
import DescriptionForm from "./DescriptionForm";
import MajorQuestionForm from "./MajorQuestionForm";
import NewMajorQuestionForm from "./NewMajorQuestionForm";

import { GET_QUIZ_QUERY } from "../../../queries";

import { Button, Text, UpperCase } from "../../design-system";
import { Box, Flex } from "@rebass/emotion";
import { css } from "@emotion/core";

export default ({ title }) => {
  const [showNewMajor, setShowNewMajor] = useState(false);

  return (
    <Query query={GET_QUIZ_QUERY} variables={{ quiz_id: title }}>
      {({ loading, error, data }) => {
        if (error) return <p>{error.message}</p>;
        if (loading) return <p>...loading</p>;
        if (data) {
          const quiz = data.quiz[0];
          return (
            <Box
              mx={5}
              my={4}
              css={css`
                height: auto;
              `}
            >
              <Box
                p={5}
                css={{
                  boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
                  background: "white",
                  height: "auto"
                }}
              >
                <Flex justifyContent="space-between" flexWrap="wrap">
                  <NameForm name={quiz.name} quiz_id={quiz.id} />

                  <Box p={4} width={[3 / 4]}>
                    <UpperCase fontSize={3} fontWeight={3} py={2}>
                      Creating Questions
                    </UpperCase>
                    <Text lineHeight={1.5} py={2} fontSize={2}>
                      Use "Major Questions" to assess overall student
                      understanding of a concept.
                    </Text>
                    <Text lineHeight={1.5} py={2} fontSize={2}>
                      Use "Minor questions" to break down the concept into
                      smaller pieces (optional).
                    </Text>
                    <Flex justifyContent="flex-end">
                      <Button mx={6} my={2} width="100px">
                        Example
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
                <DescriptionForm desc={quiz.description} quiz_id={title} />
                <Flex
                flexDirection="column"
                >
              {quiz.major_questions.map((major_question, major_pos) => (
                <MajorQuestionForm
                  {...major_question}
                  key={major_pos}
                  pos={major_pos}
                  quiz_id={title}
                />
              ))}

              {showNewMajor || (
                <Button
                  mx={3}
                  variant="success"
                  onClick={() => setShowNewMajor(true)}
                >
                  Add Major Question
                </Button>
              )}
              {showNewMajor && (
                <NewMajorQuestionForm quiz_id={title} show={setShowNewMajor} />
              )}
              </Flex>
              </Box>
            </Box>
          );
        }
      }}
    </Query>
  );
};
