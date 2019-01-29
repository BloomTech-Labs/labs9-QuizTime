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
