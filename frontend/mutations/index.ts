import gql from "graphql-tag";

export const INSERT_STUDENT = gql`
  mutation insert_student(
    $firstName: String!
    $lastName: String!
    $email: String!
    $class_id: Int!
  ) {
    insert_student(
      objects: [
        {
          first_name: $firstName
          last_name: $lastName
          email: $email
          class_id: $class_id
        }
      ]
    ) {
      returning {
        id
        first_name
        last_name
        email
        class_id
      }
    }
  }
`;
export const INSERT_CLASS_QUIZ = gql`
  mutation insert_class_quiz($class_id: Int!, $quiz_id: Int!) {
    insert_class_quiz(objects: [{ class_id: $class_id, quiz_id: $quiz_id }]) {
      returning {
        id
        due_date
        quiz {
          id
          name
        }
      }
    }
  }
`;

export const UPDATE_QUIZ_NAME = gql`
  mutation update_quiz_name($quiz_id: Int!, $name: String!) {
    update_quiz(where: { id: { _eq: $quiz_id } }, _set: { name: $name }) {
      affected_rows
    }
  }
`;

export const UPDATE_QUIZ_DESCRIPTION = gql`
  mutation update_quiz_description($quiz_id: Int!, $description: String!) {
    update_quiz(
      where: { id: { _eq: $quiz_id } }
      _set: { description: $description }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_MAJOR_QUESTION = gql`
  mutation update_major_question($id: Int!, $prompt: String!) {
    update_major_question(
      where: { id: { _eq: $major_question_id } }
      _set: { prompt: $prompt }
    ){
      affected_rows
    }
  }
`;

export const UPDATE_MAJOR_ANSWERS = gql`
  mutation update_major_answers(
    $idA: Int!
    $idB: Int!
    $idC: Int!
    $idD: Int!
    $resA: String!
    $resB: String!
    $resC: String!
    $resD: String!
    $correctA: Bool!
    $correctB: Bool!
    $correctC: Bool!
    $correctD: Bool!
  ) {
    update_major_answer(
      where: {id: {_eq: $idA}},
      set: {response: resA, correct_answer: $correctA}
    ) {
      affected_rows
    }
    update_major_answer(
      where: {id: {_eq: $idB}},
      set: {response: resB, correct_answer: $correctB}
    ) {
      affected_rows
    }
    update_major_answer(
      where: {id: {_eq: $idC}},
      set: {response: resC, correct_answer: $correctC}
    ) {
      affected_rows
    }
    update_major_answer(
      where: {id: {_eq: $idD}},
      set: {response: resD, correct_answer: $correctD}
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_MINOR_QUESTION = gql`
  mutation update_minor_question($id: Int!, $prompt: String!) {
    update_minor_question(
      where: { id: { _eq: $minor_question_id } }
      _set: { prompt: $prompt }
    ){
      affected_rows
    }
  }
`;

export const UPDATE_MINOR_ANSWERS = gql`
  mutation update_minor_answers(
    $idA: Int!
    $idB: Int!
    $idC: Int!
    $idD: Int!
    $resA: String!
    $resB: String!
    $resC: String!
    $resD: String!
    $correctA: Bool!
    $correctB: Bool!
    $correctC: Bool!
    $correctD: Bool!
  ) {
    update_minor_answer(
      where: {id: {_eq: $idA}},
      set: {response: resA, correct_answer: $correctA}
    ) {
      affected_rows
    }
    update_minor_answer(
      where: {id: {_eq: $idB}},
      set: {response: resB, correct_answer: $correctB}
    ) {
      affected_rows
    }
    update_minor_answer(
      where: {id: {_eq: $idC}},
      set: {response: resC, correct_answer: $correctC}
    ) {
      affected_rows
    }
    update_minor_answer(
      where: {id: {_eq: $idD}},
      set: {response: resD, correct_answer: $correctD}
    ) {
      affected_rows
    }
  }
`;

export const INSERT_MAJOR_QUESTION = gql`
  mutation insert_major_question($objects: [major_question_insert_input!]!){
    insert_major_question(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

export const INSERT_MINOR_QUESTION = gql`
  mutation insert_minor_question($objects: [minor_question_insert_input!]!){
    insert_minor_question(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
