import { Box } from '@rebass/emotion';
import { UpperCase, BoxText } from '../design-system';

const QuizHeading = props => {
  const { quiz, student } = props;
  return (
    <Box mb={3} >
      <BoxText fontSize={[4, 5]} my={3} fontWeight={4}>
        {student &&
          `Welcome ${student.first_name[0]
            .toUpperCase()
            .concat(
              student.first_name.slice(1)
            )} ${student.last_name[0]
            .toUpperCase()
            .concat(student.last_name.slice(1))}!`}
        <hr />
      </BoxText>
      <BoxText>
        <UpperCase fontSize={[4, 5]} fontWeight={4}>
          {quiz.name}
        </UpperCase>
      </BoxText>
      <BoxText fontSize={3} css={{ lineHeight: 1.25 }}>
        {quiz.description}
      </BoxText>
    </Box>
  );
};

export default QuizHeading;
