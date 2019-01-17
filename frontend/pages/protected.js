import securePage from '../hocs/securePage'

import AddStudent from '../components/forms/AddStudent'
import AddClass from '../components/forms/AddClass'

const Protected = ({ loggedUser }) => (
  <div>
    <div>You should only see this if signed in: {loggedUser.sub}</div>
    <h2>Add Class</h2>
    <AddClass user_id={loggedUser.sub} />
    <h3>Add Student</h3>
    <AddStudent user_id={loggedUser.sub} />
  </div>
)

export default securePage(Protected)
