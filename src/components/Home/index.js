// Write your JS code here

import Header from '../Header'
import './index.css'

const Home = props => {
  const {history} = props
  const onClickLogout = () => {
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Home Route</h1>
        <button onClick={onClickLogout}>Logout</button>
      </div>
    </>
  )
}

export default Home
