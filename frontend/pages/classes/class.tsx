import { Query } from "react-apollo";
import { useState, useEffect } from "react";
import gql from "graphql-tag";
import StudentBar from "../../components/Students/StudentBar";
import securePage from "../../hocs/securePage";
import Layout from "../../components/Layout";
import AddStudent from "../../components/forms/AddStudent";
import { getIdToken } from "../../utils/auth";
import { GraphQLClient } from "graphql-request";
import QuizElement from "../../components/boxes/QuizElement";
import ClassQuizzes from "../../components/boxes/ClassQuizzes";
import { Mutation } from "react-apollo";

import {
  StudentHolder,
  SectionContainer,
  Text,
  QuizHolder,
  QuizBox,
  QuizzesAvaliable
} from "../../components/design-system/primitives";
import { Component } from "../../node_modules/@types/react";
const endpoint = `https://quiztime-hasura.herokuapp.com/v1alpha1/graphql`;

const ClassPage = ({ query: { id } }) => {
  const [quizzesToClasses, setQuizzesToClasses] = useState([]);
console.log(quizzesToClasses)
  //similar to componentDidMount
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${getIdToken()}`
    }
  });

  const ALL_STUDENTS_QUERY = gql`
  query ALL_STUDENTS_QUERY {
    class (where: {id: {_eq: ${id}}}){
      id
      students {
        id
        class_id
        last_name
        first_name
        email
      }
    }
    quiz{
      id
      name
    }
    class_quiz(where: {id: {_eq: ${id}}}){
      id
      class_id
      quiz_id
      quiz {
        name
      }
    }
  }
`;

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


  function addQuizToClass(quiz_id, quiz_name) {
    setQuizzesToClasses([
      ...quizzesToClasses,
      { quiz_name: quiz_name, quiz_id: quiz_id, class_id: id }
    ]);
    // for(let i = 0; i < quizzesToClasses.length; i++){
    //   console.log(quizzesToClasses[i], quiz_id)
    //  if(quizzesToClasses[i].quiz_id !== quiz_id){
    //    console.log(quizzesToClasses[i])
      return client.request(generateMutation(quiz_id, id)).then((response) => console.log(response));
     }
    

  

  useEffect(
    () => {
      console.log(quizzesToClasses);
    },
    [quizzesToClasses]
  );

  return (
    <Layout>
      <Text>Send Email</Text>

      <Text>Add a Student</Text>

      <AddStudent class={id} />
      <Query query={ALL_STUDENTS_QUERY}>
        {({ loading, error, data }) => {
          if (error) return <p>{error.message}</p>;
          if (loading) return <p>...loading</p>;
          if (data) {
            console.log(data);
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
                        addQuizToClass={addQuizToClass}
                      />
                    ))}
                  </QuizBox>
                  <QuizzesAvaliable>
                    {data.class_quiz[0].quiz.map(quizzes => (
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
ClassPage.getInitialProps = async function(context) {
  const { id } = context.query;
  return { id };
};
export default securePage(ClassPage);
