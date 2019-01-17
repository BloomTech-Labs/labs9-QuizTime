import React from 'react'
import Router from 'next/router'
import { GraphQLClient } from 'graphql-request'
import Cookie from 'js-cookie'

import { setToken, getIdToken } from '../../utils/auth'
import { parseHash } from '../../utils/auth0'

const endpoint = `https://quiztime-hasura.herokuapp.com/v1alpha1/graphql`


const queryTeacherCheck = `
  query {
    teacher {
      id
    }
  }
`

export default class SignedIn extends React.Component {
  componentDidMount() {
    parseHash((err, result) => {
      if(err) {
        console.error('Something happened with the Sign In request')
        //look into redirecting them to an error page
        return;
      }

      setToken(result.idToken, result.accessToken)
      const client = new GraphQLClient(endpoint, {
        headers: {
          'Authorization': `Bearer ${result.idToken}`
        }
      })
      console.log(client)
      client.request(queryTeacherCheck).then(({ teacher }) => console.log(teacher))
    })



    //make a query on teacher

    //if results === 0
    //insert a teacher

    // Router.push('/home')
  }
  render(){
    return null
  }
}
