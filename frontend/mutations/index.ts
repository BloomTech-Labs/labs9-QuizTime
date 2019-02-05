import gql from "graphql-tag";

export const INSERT_STUDENT = gql`
  mutation insert_student($firstName: String!, $lastName: String!, $email: String!, $class_id: Int!) {
      insert_student(
      objects:[
              {
                first_name: $firstName,
                last_name: $lastName,
                email: $email,
                class_id: $class_id
              }
          ]
          ){
          returning{
              id
              first_name
              last_name
              email
              class_id
          }
      }
  }
`
export const INSERT_CLASS_QUIZ = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_QUIZ_NAME = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_QUIZ_DESCRIPTION = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_MAJOR_QUESTION = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_MAJOR_ANSWERS = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_MINOR_QUESTION = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`

export const UPDATE_MINOR_ANSWERS = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!){
    insert_class_quiz(
      objects:[
        {
          class_id: $class_id,
          quiz_id: $quiz_id
        }
      ]
    ){
      returning{
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`
