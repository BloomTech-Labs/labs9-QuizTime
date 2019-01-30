import React from 'react'
import Router from 'next/router'

//import student auth functions here
import { setStudentToken } from '../../utils/auth'

export default class StudentLanding extends React.Component {
  static getInitialProps({ query }) {
    return { query }

  }
  componentDidMount() {
    setStudentToken(this.props.query.token);
    Router.push('/student/studentquiz')
  }

  render() {
    return null
  }
}
