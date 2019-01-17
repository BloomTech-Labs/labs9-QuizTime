import { getUserFromLocalCookie } from '../utils/auth'

const Home = ({ query }) => {
  const user = getUserFromLocalCookie()
  return(<div>{ `Hello ${user.given_name} ${user.family_name}` }</div>)
}

Home.getInitialProps = async (context) => {
  const { query } = context
  return { query }
}

export default Home;
