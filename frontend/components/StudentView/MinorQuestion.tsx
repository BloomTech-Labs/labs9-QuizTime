import { Box, Flex } from '@rebass/emotion';
import { BoldText, Input, BoxText } from '../design-system';

const MinorQuestion = ({ q, index, idx, majorIndex, minorIndex, handleMinorChange }) => {
  return (
    <Box mb={20} ml={10} pl={'10px'} key={q.id} css={{borderLeft: '2px solid lightgrey'}}>
      <BoxText htmlFor={`minor-question-${q.id}`}>
        <BoldText fontSize={3} fontWeight={4}>
          Follow-Up Question {index + 1}
        </BoldText>
      </BoxText>
      <BoxText my={1} fontSize={3} fontWeight={3}>{q.prompt}</BoxText>
      {q.answers.map((a, indx) => (
        <Box  key={a.id} ml={10} my={1}>
          <Flex  alignItems='center'>
            <input 
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
