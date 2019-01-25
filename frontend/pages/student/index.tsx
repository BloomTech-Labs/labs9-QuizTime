import React from 'react'
import Router from 'next/router'

//import student auth functions here
import { setStudentToken } from '../../utils/auth'

export default class StudentLanding extends React.Component {
  static getInitialProps({query}){
    console.log(query)
    return {query}

  }
  componentDidMount() {
    console.log('token', this.props.query.token) 
    setStudentToken(this.props.query.token);
    Router.push('/student/studentquiz')
  }

  render(){
    return null
  }
}
