import { Box } from '@rebass/emotion';
import { UpperCase, BoxText } from '../design-system';

const QuizHeading = props => {
  const { quiz, student } = props;
  return (
    <Box mb={3} >
      <BoxText fontSize={[5, 6]} my={3} fontWeight={600} color={'blue.2'}>
        {student &&
          `Welcome ${student.first_name[0]
            .toUpperCase()
            .concat(
              student.first_name.slice(1)
            )}!`}
        <hr />
      </BoxText>
      <BoxText mb={2}>
        <UpperCase fontSize={[4, 5]} fontWeight={5} color={'red.2'}>
          {quiz.name}
        </UpperCase>
      </BoxText>
      <BoxText style={{borderRadius: 10}} mb={4} fontSize={3} p={3} bg={'#f2f2f2'}css={{ lineHeight: 1.25 }}>
        {quiz.description}
      </BoxText>
    </Box>
  );
};

export default QuizHeading;
