import EditQuizForm from '../../components/forms/EditQuiz';
import Layout from '../../components/Layout';

const EditQuiz = ({ query: { title }}) => (
  <Layout>
    <EditQuizForm title={title} />
  </Layout>
);

export default EditQuiz;
