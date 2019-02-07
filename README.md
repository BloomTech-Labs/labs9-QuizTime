# QuizTime - Lambda-Labs 9

Pleae click [here](https://quiztime.now.sh) to view the deployed application.  Please click [here]() to view our video tutorial. 

![QuizTime](./frontend/img/QuizTime.jpg)

## Team

Joseph Stossmeister | [Github](https://github.com/Jstoss)

Allen Hai | [Github](https://github.com/coetry)

Keith Kennegy | [Github](https://github.com/Kennedykid1995)

Cesar Napoleon Mejia Leiva | [Github](https://github.com/cesarnml)

Carey Baldwin | [Github](https://github.com/careybaldwin02)

Please feel free to contact us with questions about this project.

## Running

After forking this repository, the user should run ```$ npm install``` or ```$ yarn install``` in order to gain access to the necessary dependencies
 
### Back End


### Front End

To get the project up and running in your browser ```$ npm run dev``` or ```$ yarn dev``` and go to localhost:3000.

## Environment Variables

* TOKEN_SECRET:  512 character
* X_HASURA_ACCESS_KEY:  secret key for Hasura
* SENDGRID_USERNAME:  username for sendgrid
* SENDGRID_PASSWORD:  password for sendgrid
* STRIPE_SECRET_KEY:  secret key for stripe
* STRIPE_ALLOW_DOMAIN: deployed front end URL

## Technical Stack

### Back End Dependencies

#### Hasura
Postgres - 

graphQL - 

#### Auth0
auth0 is used to register and authenticate users | [view dependency](https://auth0.com/)

#### Micro
external API’s are supported with Micro which allows compartmentalization of features.  | [view dependency](https://github.com/zeit/micro)

#### Stripe
a powerful, simple, and seamless payment system that enables teachers to manage payments or upgrade to the pro plan. | [view dependency](https://stripe.com/docs/)

#### Sendgrid
SendGrid supports the distribution of quizzes to students.  In combination with DatePicker, a teacher can select a date from a dropdown.  This triggers an email to students. | [view dependency](  https://sendgrid.com/docs/)


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

