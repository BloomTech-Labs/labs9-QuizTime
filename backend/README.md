# Backend

## Table of Contents

<!-- TOC -->

- [Backend](#backend)
  - [Table of Contents](#table-of-contents)
  - [Backend Resource Links](#backend-resource-links)
  - [Database Schema on Hasura](#database-schema-on-hasura)
    - [Tables](#tables)
      - [Teacher](#teacher)
        - [Teacher Structure](#teacher-structure)
        - [Teacher Sample Data](#teacher-sample-data)
        - [Teacher Constraints](#teacher-constraints)
      - [Class](#class)
        - [Class Structure](#class-structure)
        - [Class Sample Data](#class-sample-data)
        - [Class Constraints](#class-constraints)
      - [Student](#student)
        - [Student Structure](#student-structure)
        - [Student Sample Data](#student-sample-data)
        - [Student Constraints](#student-constraints)
      - [Quiz](#quiz)
        - [Quiz Structure](#quiz-structure)
        - [Quiz Sample Data](#quiz-sample-data)
        - [Quiz Constraints](#quiz-constraints)
      - [Major_Question](#major_question)
        - [Major_Question Structure](#major_question-structure)
        - [Major_Question Constraints](#major_question-constraints)
      - [Major_Answer](#major_answer)
        - [Major_Answer Structure](#major_answer-structure)
        - [Major_Answer Constraints](#major_answer-constraints)
      - [Minor_Question](#minor_question)
        - [Minor_Question Structure](#minor_question-structure)
        - [Minor_Question Constraints](#minor_question-constraints)
      - [Minor_Answer](#minor_answer)
        - [Minor_Answer Structure](#minor_answer-structure)
        - [Minor_Answer Constraints](#minor_answer-constraints)
    - [Join/Junction Tables](#joinjunction-tables)
      - [Class_Quiz](#class_quiz)
        - [Class_Quiz Structure](#class_quiz-structure)
        - [Class_Quiz Sample Data](#class_quiz-sample-data)
        - [Class_Quiz Constraints](#class_quiz-constraints)
      - [Student_Major_Answer](#student_major_answer)
        - [Student_Major_Answer Structure](#student_major_answer-structure)
        - [Student_Major_Answer Constraints](#student_major_answer-constraints)
      - [Student_Minor_Answer](#student_minor_answer)
        - [Student_Minor_Answer Structure](#student_minor_answer-structure)
        - [Student_Minor_Answer Constraints](#student_minor_answer-constraints)
  - [GraphQL Relationships](#graphql-relationships)
    - [Models](#models)
      - [Teacher](#teacher-1)
      - [Class](#class-1)
      - [Student](#student-1)
      - [Quiz](#quiz-1)
      - [Major_Question](#major_question-1)
      - [Major_Answer](#major_answer-1)
      - [Minor_Question](#minor_question-1)
      - [Minor_Answer](#minor_answer-1)
      - [Class_Quiz](#class_quiz-1)
      - [Student_Major_Answer](#student_major_answer-1)
      - [Student_Minor_Answer](#student_minor_answer-1)

<!-- /TOC -->

## Backend Resource Links

Heroku Backend Server URL: https://dashboard.heroku.com/apps/quiztime-hasura

Hasura GraphQL Endpoint: https://quiztime-hasura.herokuapp.com/v1alpha1/graphql

## Database Schema on Hasura

### Tables

#### Teacher

##### Teacher Structure

![teacher_structure](./img/teacher_structure.png)

##### Teacher Sample Data

![teacher_data](./img/teacher_data.png)

##### Teacher Constraints

![teacher_constraints](./img/teacher_constraints.png)

---

#### Class

##### Class Structure

![class_structure](./img/class_structure.png)

##### Class Sample Data

![class_data](./img/class_data.png)

##### Class Constraints

![class_constraints](./img/class_constraints.png)

---

#### Student

##### Student Structure

![student_structure](./img/student_structure.png)

##### Student Sample Data

![student_data](./img/student_data.png)

##### Student Constraints

![student_constraints](./img/student_constraints.png)

---

#### Quiz

##### Quiz Structure

![quiz_structure](./img/quiz_structure.png)

##### Quiz Sample Data

![quiz_data](./img/quiz_data.png)

##### Quiz Constraints

![quiz_constraints](./img/quiz_constraints.png)

---

#### Major_Question

##### Major_Question Structure

![major_question_structure](./img/major_question_structure.png)

##### Major_Question Constraints

![major_question_constraints](./img/major_question_constraints.png)

---

#### Major_Answer

##### Major_Answer Structure

![major_answer_structure](./img/major_answer_structure.png)

##### Major_Answer Constraints

![major_answer_constraints](./img/major_answer_constraints.png)

---

#### Minor_Question

##### Minor_Question Structure

![minor_question_structure](./img/minor_question_structure.png)

##### Minor_Question Constraints

![minor_question_constraints](./img/minor_question_constraints.png)

---

#### Minor_Answer

##### Minor_Answer Structure

![minor_answer_structure](./img/minor_answer_structure.png)

##### Minor_Answer Constraints

![minor_answer_constraints](./img/minor_answer_constraints.png)

### Join/Junction Tables

#### Class_Quiz

##### Class_Quiz Structure

![class_quiz_structure](./img/class_quiz_structure.png)

##### Class_Quiz Sample Data

![class_quiz_data](./img/class_quiz_data.png)

##### Class_Quiz Constraints

![class_quiz_constraints](./img/class_quiz_constraints.png)

---

#### Student_Major_Answer

##### Student_Major_Answer Structure

![student_major_answer_structure](./img/student_major_answer_structure.png)

##### Student_Major_Answer Constraints

![student_major_answer_constraints](./img/student_major_answer_constraints.png)

---

#### Student_Minor_Answer

##### Student_Minor_Answer Structure

![student_minor_answer_structure](./img/student_minor_answer_structure.png)

##### Student_Minor_Answer Constraints

![student_minor_answer_constraints](./img/student_minor_answer_constraints.png)

## GraphQL Relationships

### Models

#### Teacher

![teacher_relationships](./img/teacher_relationships.png)

---

#### Class

![class_relationships](./img/class_relationships.png)

---

#### Student

![student_relationships](./img/student_relationships.png)

---

#### Quiz

![quiz_relationships](./img/quiz_relationships.png)

---

#### Major_Question

![major_question_relationships](./img/major_question_relationships.png)

---

#### Major_Answer

![major_answer_relationships](./img/major_answer_relationships.png)

---

#### Minor_Question

![minor_question_relationships](./img/minor_question_relationships.png)

---

#### Minor_Answer

![minor_answer_relationships](./img/minor_answer_relationships.png)

---

#### Class_Quiz

![class_quiz_relationships](./img/class_quiz_relationships.png)

---

#### Student_Major_Answer

![student_major_answer_relationships](./img/student_major_answer_relationships.png)

---

#### Student_Minor_Answer

![student_minor_answer_relationships](./img/student_minor_answer_relationships.png)
