import { Query } from "react-apollo";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import securePage from "../../hocs/securePage";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import QuizElement from "../../components/boxes/QuizElement";
import ClassQuizzes from "../../components/boxes/ClassQuizzes";
import {ALL_STUDENTS_QUERY} from '../../queries';

import {
  StudentHolder,
  SectionContainer,
  Text,
  QuizBox,
  QuizzesAvaliable
} from "../../components/design-system/primitives";


const ClassPage = ({ query: { id } }) => {

  const generateMutation = (quiz_id, class_id) => {
    return `
    mutation add_quiz_to_class{
      insert_class_quiz(
        objects:[
          {
            class_id:${class_id},
            quiz_id:${quiz_id}
          }
        ]
      ){
        returning{
          id
        }
      }
    }
    `;
  };

  return (
    <Layout>
      <Text>Send Email</Text>

      <Text>Add a Student</Text>

      <AddStudent class_id={id} />

      <Query query={ALL_STUDENTS_QUERY} variables={{class_id: id}}>
        {({ loading, error, data }) => {
          if (error) return <p>{error.message}</p>;
          if (loading) return <p>...loading</p>;
          if (data) {
            return (
              <>
                <SectionContainer>
                  <StudentHolder>
                    {data.class[0].students.map(student => (
                      <StudentBar
                        id={student.id}
                        key={student.id}
                        student={student}
                      />
                    ))}
                  </StudentHolder>
                  <QuizBox>
                    {data.quiz.map(q => (
                      <QuizElement
                        key={q.id}
                        quiz={q}
                      />
                    ))}
                  </QuizBox>
                  <QuizzesAvaliable>
                    {data.class[0].quizzes.map(quizzes => (
                    <ClassQuizzes
                     quizzes={quizzes}
                      />
                       ))}
                  </QuizzesAvaliable>
                </SectionContainer>
              </>
            );
          }
        }}
      </Query>
    </Layout>
  );
};

export default securePage(ClassPage);
