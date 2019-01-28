import React from 'react'
import Router from 'next/router'

import { getUserFromServerCookie, getUserFromLocalCookie} from '../utils/auth'

const securePageHoc = Page => class SecurePage extends React.Component {
  static getInitialProps(ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser
    }
  }

  logout = eve => {
    if(eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount() {
    window.addEventListener('storage', this.logout, false)
    if(!this.props.isAuthenticated){
      Router.push('/')
    }
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.logout, false)
  }

  render() {
    if(!this.props.isAuthenticated) {
      return null
    }
    return <Page {...this.props} />
  }
}

export default Page => securePageHoc(Page)
