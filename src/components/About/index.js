// Write your JS code here
import Header from '../Header'
import './index.css'

const About = () => {
  const {history} = props
  const onClickLogout = () => {
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Route</h1>
        <button>Logout</button>
      </div>
    </>
  )
}

export default About
