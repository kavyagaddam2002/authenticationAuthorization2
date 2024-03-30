// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  onClickButton = () => {
    Cookies.set('jwt_token', 'jwt_token', {expires: 30})
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={this.onClickButton}>Login with sample creds</button>
    </div>
  )
}

export default Login
