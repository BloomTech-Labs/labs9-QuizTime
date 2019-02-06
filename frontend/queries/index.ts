import gql from "graphql-tag";

export const ALL_CLASSES_QUERY = gql`
  query ALL_CLASSES_QUERY {
    class {
      id
      name
    }
  }
`;

export const ALL_STUDENTS_QUERY = gql`
  query ALL_STUDENTS_QUERY($class_id: Int!) {
    class(where: {id: {_eq: $class_id}}){
      id
      name
      students{
        id
        first_name
        last_name
        class_id
        email
      }
      quizzes{
        id
        due_date
        quiz{
          id
          name
        }
      }
    }
    quiz{
      id
      name
    }
  }
`;

export const GET_STUDENT_QUIZZES = gql`
  query get_student_quizzes($student_id: Int!){
    student(where: {id: {_eq: $student_id}}){
      id
      first_name
      last_name
      email
      score{
        score
        quizByquizId{
          id
          name
          description
          major_questions{
            id
          }
        }
      }
    }
  }
`
