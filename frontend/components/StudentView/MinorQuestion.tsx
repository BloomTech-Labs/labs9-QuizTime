import { Box, Flex } from '@rebass/emotion';
import { BoldText, Input, BoxText } from '../design-system';

const MinorQuestion = ({ q, index, idx, majorIndex, minorIndex, handleMinorChange }) => {
  return (
    <Box mb={20} width={0.95} ml={10} pl={15} key={q.id} css={{borderLeft: '1px solid lightgrey'}}>
      <BoxText htmlFor={`minor-question-${q.id}`}>
        <BoldText fontSize={3} fontWeight={4}>
          Follow-up Question {index + 1}
        </BoldText>
      </BoxText>
      <BoxText ml={10} my={1} fontSize={3} fontWeight={3}>{q.prompt}</BoxText>
      {q.answers.map((a, indx) => (
        <Box width={0.95} key={a.id} ml={25} my={1}>
          <Flex>
            <Input
              onChange={
                idx === majorIndex && minorIndex[majorIndex] - 1 === index
                  ? e => handleMinorChange(e, q, a)
                  : null
              }
              type='radio'
              name={`mini-question-${q.id}-mini-answer`}
              value={index + 1}
            />
            <BoxText ml={10}>{a.response}</BoxText>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default MinorQuestion;
