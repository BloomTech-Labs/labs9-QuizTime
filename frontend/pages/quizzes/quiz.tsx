import EditQuizForm from '../../components/forms/EditQuiz';
import Layout from '../../components/Layout';
import securePage from '../../hocs/securePage';

const EditQuiz = ({ query: { title }}) => (
  <Layout>
    <EditQuizForm title={title} />
  </Layout>
);

export default securePage(EditQuiz);
