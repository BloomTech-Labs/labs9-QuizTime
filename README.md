# QuizTime - Lambda-Labs 9

Pleae click [here](https://quiztime.now.sh) to view the deployed application.  Please click [here](https://youtu.be/qXUWcaWFj_o) to view our video walkthrough. 

![QuizTime](./frontend/img/QuizTime.jpg)

## Team
| Name | Contact |
|---|---|
| Joseph Stossmeister | [Github](https://github.com/Jstoss)| 
| Allen Hai | [Github](https://github.com/coetry) |
| Keith Kennegy | [Github](https://github.com/Kennedykid1995) |
| Cesar Napoleon Mejia Leiva | [Github](https://github.com/cesarnml) |
| Carey Baldwin | [Github](https://github.com/careybaldwin02) |

Please feel free to contact us with questions about this project.

## Running

After forking this repository, the user should run ```$ npm install``` or ```$ yarn install``` in order to activate the necessary dependencies
 
To get the project up and running in your browser use ```$ npm run dev``` or ```$ yarn dev``` and go to localhost:3000.

## Environment Variables

* TOKEN_SECRET:  512 character
* X_HASURA_ACCESS_KEY:  secret key for Hasura
* SENDGRID_USERNAME:  username for sendgrid
* SENDGRID_PASSWORD:  password for sendgrid
* STRIPE_SECRET_KEY:  secret key for stripe
* STRIPE_ALLOW_DOMAIN: deployed front end URL

## Media

Our landing page uses five images which are all sourced from either Unsplash [licensing](https://unsplash.com/license) or Pexels [licensing](https://www.pexels.com/photo-license/).  We have reviewed and followed the lisencing requirements. 


## Technical Stack

### Front End Dependencies

#### React with Next.js 
Next JS is a universal framework used to enable server side rendering and routing.   [view dependency](https://nextjs.org/)

Next.js will serve each file in /pages under a pathname matching the filename. For example, /pages/about.js is served at site.com/about.

```
import Link from 'next/link'
export default () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <Link href='/about'><a>About</a></Link>
  </div>
)
```

#### React apollo
We used react-apollo to query the database using Apollo Client.  Apollo client is designed to help you quickly build a UI that fetches data with GraphQL, and can be used with any JavaScript front-end.  [view dependency](https://www.apollographql.com/docs/react/)

#### Datepicker
In order to select a date for quiz assignment, we used react-datepicker [view dependency](https://reactdatepicker.com/)

#### Rebass/emotion 
Rebass is a collection of pre-built, consistently styled components.  We relied partially on this system to style the application. [view dependency](https://rebassjs.org/)

#### Styled-system/design-system
We essentially built our own reusable theme and styled components that were accessible throughout the app.  You can read more about this paradigm here:  [view dependency](https://varun.ca/styled-system/) 


### Back End Dependencies

#### Hasura   
Our application is powered by Hasura.  Hasura is an open-source engine with a realtime GraphQL API built on a Postgres database, with built-in support for stitching custom GraphQL APIs and triggering web hooks on database changes. | [view dependency](https://hasura.io/)

#### Auth0
auth0 is used to register and authenticate users | [view dependency](https://auth0.com/)

#### Micro
external API’s are supported with Micro which allows compartmentalization of features.  | [view dependency](https://github.com/zeit/micro)

#### Stripe
a powerful, simple, and seamless payment system that enables teachers to manage payments or upgrade to the pro plan. | [view dependency](https://stripe.com/docs/)

#### Sendgrid
SendGrid supports the distribution of quizzes to students.  In combination with DatePicker, a teacher can select a date from a dropdown.  This triggers an email to students. | [view dependency](  https://sendgrid.com/docs/)

### Using the Back End API

#### Auth Token Payload
The JWT from auth0 is configured with the custom rule:

```
function (user, context, callback) {  
    const namespace = "https://hasura.io/jwt/claims";
    const roles = ['user'];   
    context.idToken[namespace] =     
        {       
            'x-hasura-default-role': 'user',      
             'x-hasura-allowed-roles': roles,      
             'x-hasura-user-id': user.user_id,       
             'x-hasura-user-email': user.email ? user.email : "",       
             'x-hasura-user-first-name': user.given_name ? user.given_name : "",       
             'x-hasura-user-last-name': user.family_name ? user.family_name : ""        
        };   
    callback(null, user, context); }
```
Hasura will use the x-hasura-user-id for permission checks.

#### Requesting Data

Hasura is using GraphQL and as such all requests are a POST request with a GraphQL command string describing the shape of the data being requested or modified.

Therefore the request:
```
query GET_TEACHER{
    teacher{
        id
        email
    }
}
```
will respond with a data object containing a teacher array of objects with id and email of every teacher the requester has permission to view. In the case of a normal user, Hasura is configured
to only return fields where the id is equal to the x-hasura-user-id in the provided JWT token. So it would look like:
```
{
    "data": {
        "teacher": [
            {
                "id": <current teacher id>
                "email": "current_teacher@email.com"
            }
        ]
    }
}
```
Data related to each other via one-to-many or many-to-many relationships can be queried together based on named relations. For example the request:
```
query GET_QUIZ($quiz_id: Int!){
    quiz(where: {id: {_eq: $quiz_id}}){
        id
        name
        description
        major_questions{
            id
            prompt
            answers{
                id
                response
                correct_answer
            }
            minor_questions{
                id
                prompt
                answers{
                    id
                    response
                    correct_answer
                }
            }
        }
    }
}
```
Will query for a quiz where the id matches the passed in quiz_id. The returning data object will contain a quiz array with the matching quiz object. The quiz object will have a sub array for major_questions containing all the major questions related to the current quiz based off the quiz->major_question table one-to-many relationship. Each object in the major question array will also have a sub array named answers containing the major question's related major_answers, and so on for minor questions
```
{
    "data": {
        "quiz": [
            {
                "id": 12,
                "name": "Quiz Name",
                "description": "Quiz Description",
                "major_questions": [
                    {
                        "id": <id of major question>,
                        "prompt": "Question prompt",
                        "answers": [
                            {
                                "id": <id of major answer>,
                                "response": "Question prompt response",
                                "correct_answer": <true/false>
                            }
                        ]
                        "minor_questions": [
                            {
                                "id": <id of minor question>,
                                "prompt": "Question prompt".
                                "answers": [
                                    {
                                        "id": <id of minor answer>,
                                        "response": "Question prompt response",
                                        "correct_answer": <true/false>
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```
### Current Relationships and Corresponding Names

| DB Table A | DB Table B | Name | Relationship Type |
|---|---|---|---|
| teacher | class | classes | array |
| teacher | student | students | array |
| teacher | quiz | quizzes | array |
| class | teacher | teacher | object |
| class | class_quiz | quizzes | array |
| class | student | students | array |
| class_quiz | class | class | object |
| class_quiz | quiz | quiz | object |
| quiz | class_quiz | classes | array |
| quiz | major_question | major_questions | array |
| major_question | quiz | quiz | object |
| major_question | teacher | teacher | object |
| major_question | major_answer | answers | array |
| major_question | minor_question | minor_questions | array |
| major_question | student_major_answer | student_answers | array |
| minor_question | major_question | major_question | object |
| minor_question | minor_answer | answers | array |

### Mutations

#### Inserting

Insertion follows the format of calling a mutation and the ```insert_<table_name>()```.

Example: 
 ```
 mutation insert_student($objects: [student_insert_input!]! ) {
  insert_student(objects: $objects) {
    returning {
      id
      title
    }
  }
}
 ```

where objects is a variables object sent with the request that looks like:
```
{
    "objects": [
        {
            "first_name": "Student's First Name",
            "last_name": "Student's Last Name",
            "email": "Student's email",
            "class_id": <id of student's class>
        }
    ]
}
```

The teacher_id for the table will be automatically set via the user's token, and the returning field is a GraphQL query of what data you would like to receive back.

It's possible to insert multiple related fields at one time, provided that the sub-inserts are properly wrapped in a data array.

Example: 
```
mutation insert_major_question($objects: [major_question_insert_input!]!){
    insert_major_question(objects: $objects) {
        returning{
            id
            prompt
        }
    }
}
```
where objects is:
```
{
    "objects": [
        {
            "prompt": "Major Question Prompt",
            "answers": {
                "data": [
                    {
                        "response": "Major Question Answer Response",
                        "correct_answer": <true/false>
                    },
                    {
                        "response": "Major Question Answer Response",
                        "correct_answer": <true/false>
                    },
                    {
                        "response": "Major Question Answer Response",
                        "correct_answer": <true/false>
                    },
                    {
                        "response": "Major Question Answer Response",
                        "correct_answer": <true/false>
                    },
                ]
            }
        }
    ]
}
```

This will insert a major question and four corresponding answers to the question, giving major question an id and setting the major_question_id foreign key on the new major_answer entries properly and teacher_id will be set on everything automatically using the provided JWT token.

#### Updating

Updating an entry is based on sending an update mutation with a corresponding ```update_<table_name>``` being passed a where object containing identification of the entries to update and a _set object containing key-value pairs where the key is the field to update and the value is the value to place in that column.

Example:
```
mutation update_quiz($quiz_id: Int!, $changes: quiz_set_input){
    update_quiz(
        where: {id: {_eq: $quiz_id}},
        _set: $changes
    ) {
        affected_rows
        returning {
            id
        }
    }
}
```
where passed variables are:
```
{
    "id": <quiz_id>,
    "changes": {
        "name": "New Quiz Name"
    }
}
```
will update the name of the quiz with the corresponding id to "New Quiz Name", and return the number of affected rows, and the id.

#### Deleting

Deleting an entry is based on sending a delete mutation with a corresponding ```delete_<table_name>``` being passed a where object containing identification of the entries to delete.

Example:
```
mutation delete_quiz($quiz_id: Int!){
    delete_quiz(
        where: {id: {_eq: $quiz_id}}
    ) {
        affected_rows
    }
}
```
Which will delete a quiz where the quiz's id is equal to the quiz_id variable passed in and will return the number of affected rows.

For more details and examples about interacting with Hasura, please check out the documentation found [here](https://hasura.io/)

