import React from 'react'

import { authorize } from '../../utils/auth0'

export default class SignIn extends React.Component {
  componentDidMount() {
    authorize()
  }

  render() {
    return null
  }
}
