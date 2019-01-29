import React from 'react'
import Router from 'next/router'

import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'

const unsecurePageHoc = Page => class UnsecurePage extends React.Component{
  static async getInitialProps(ctx) {
    const loggedUser = process.browser ? await getUserFromLocalCookie() : await getUserFromServerCookie(ctx.req)
    const pageProps = await Page.getInitialProps && await Page.getInitialProps(ctx)
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser
    }
  }

  componentDidMount() {
    if(this.props.isAuthenticated){
      Router.push('/classes')
    }
  }

  render() {
    if(this.props.isAuthenticated) {
      return null
    }
    return <Page {...this.props} />
  }
}

export default Page => unsecurePageHoc(Page)
