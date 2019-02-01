import { Box } from '@rebass/emotion';
import { UpperCase, BoxText } from '../design-system';

const QuizHeading = props => {
  const {quiz} = props
  return (
    <Box mx={2} my={3} width={0.95}>
      <BoxText>
        <UpperCase fontSize={5} fontWeight={4}>
          {quiz.name}
        </UpperCase>
      </BoxText>
      <BoxText fontSize={3} css={{lineHeight: 1.25}}>{quiz.description}</BoxText>
    </Box>
  );
};

export default QuizHeading;
