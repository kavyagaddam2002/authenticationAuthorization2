// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </div>
)

export default withRouter(Header)
