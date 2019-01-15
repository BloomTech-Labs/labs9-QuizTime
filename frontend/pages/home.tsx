import { getUserFromLocalCookie } from '../utils/auth'

const Home = ({ query }) => {
  return(<div>{ JSON.stringify(getUserFromLocalCookie()) }</div>)
}

Home.getInitialProps = async (context) => {
  const { query } = context
  return { query }
}

export default Home;
