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
    <Container mb={20}>
      <BoxText htmlFor={`major-question-${q.id}`}>
        <BoldText fontSize={4} fontWeight={4}>
          Question {idx + 1}
        </BoldText>
      </BoxText>
      <BoxText ml={10} my={1} fontSize={3}>
        {' '}
        {q.prompt}
      </BoxText>
      {q.answers.map((a, index) => (
        <Box key={a.id} ml={25}>
          <Flex alignItems='center'>
            <input
              onChange={
                idx === majorIndex && isMajor
                  ? e => handleMajorChange(e, q, a)
                  : null
              }
              type='radio'
              name={`major-question-${q.id}-major-answer`}
              value={index + 1}
            />
            <BoxText ml={10}>{a.response}</BoxText>
          </Flex>
        </Box>
      ))}
    </Container>
  );
};

export default MajorQuestion;
