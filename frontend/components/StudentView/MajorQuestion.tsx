import { Box, Flex } from '@rebass/emotion';
import {
  Container,
  BoldText,
  UpperCase,
  Input,
  BoxText,
} from '../design-system';

const MajorQuestion = ({ q, majorIndex, idx, isMajor, handleMajorChange }) => {
  return (
    <Container mb={45}>
      <BoxText style={{ cursor: 'default' }} htmlFor={`major-question-${q.id}`}>
        <BoldText fontSize={4} fontWeight={5} color={'blue.1'}>
          Primary Question {idx + 1}
        </BoldText>
      </BoxText>
      <BoxText style={{ cursor: 'default' }} fontSize={3} my={2}>
        {q.prompt}
      </BoxText>
      {q.answers.map((a, index) => (
        <Box key={a.id} ml={15}>
          <Flex alignItems='center'>
            <input
              onChange={
                idx === majorIndex && isMajor
                  ? e => handleMajorChange(e, q, a)
                  : null
              }
              type='radio'
              name={`major-question-${q.id}-major-answer`}
              value={a.id}
            />
            <BoxText ml={10}>
              {a.response}
            </BoxText>
          </Flex>
        </Box>
      ))}
    </Container>
  );
};

export default MajorQuestion;
