import securePage from '../hocs/securePage'

const Protected = ({ loggedUser }) => <div>You should only see this if signed in: {loggedUser.email}</div>

export default securePage(Protected)
