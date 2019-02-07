import { Box } from '@rebass/emotion';
import { UpperCase, BoxText } from '../design-system';

const QuizHeading = props => {
  const { quiz, student } = props;
  return (
    <Box mb={3}>
      <BoxText
        style={{ borderBottom: '2px solid darkgray' }}
        fontSize={['36px', 6]}
        mt={3}
        mb={'20px'}
        pb={'10px'}
        fontWeight={600}
        color={'blue.2'}
      >
        {student &&
          `Welcome ${student.first_name[0]
            .toUpperCase()
            .concat(student.first_name.slice(1))}!`}
      </BoxText>
      <BoxText mb={'28px'}>
        <UpperCase fontSize={['28px', '32px']} fontWeight={5} color={'red.2'}>
          {quiz.name}
        </UpperCase>
      </BoxText>
      <BoxText
        style={{ borderRadius: 10 }}
        mb={'28px'}
        fontSize={3}
        p={3}
        bg={'#f2f2f2'}
        css={{ lineHeight: 1.25 }}
      >
        {quiz.description}
      </BoxText>
    </Box>
  );
};

export default QuizHeading;
