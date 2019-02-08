import { Box, Flex } from '@rebass/emotion';
import { BoldText, Input, BoxText } from '../design-system';

const MinorQuestion = ({
  q,
  index,
  idx,
  majorIndex,
  minorIndex,
  handleMinorChange,
}) => {
  return (
    <Box
      mb={45}
      ml={20}
      pl={'20px'}
      key={q.id}
      css={{ borderLeft: '2px solid lightgrey' }}
    >
      <BoxText style={{ cursor: 'default' }} htmlFor={`minor-question-${q.id}`}>
        <BoldText fontSize={4} fontWeight={5} color={'green.2'}>
          Follow-Up Question {index + 1}
        </BoldText>
      </BoxText>
      <BoxText my={2} fontSize={3} fontWeight={3} style={{ cursor: 'default' }}>
        {q.prompt}
      </BoxText>
      {q.answers.map((a, indx) => (
        <Box key={a.id} ml={10} my={1}>
          <Flex alignItems='center'>
            <input
              onChange={
                idx === majorIndex && minorIndex[majorIndex] - 1 === index
                  ? e => handleMinorChange(e, q, a)
                  : null
              }
              type='radio'
              name={`mini-question-${q.id}-mini-answer`}
              value={a.id}
            />
            <BoxText ml={10}>{a.response}</BoxText>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default MinorQuestion;
