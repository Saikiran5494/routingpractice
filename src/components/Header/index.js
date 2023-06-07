// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt=" wave"
        className="logo"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="header-contents">
      <li className="content">
        <Link to="/">Home</Link>
      </li>
      <li className="content">
        <Link to="/about">About</Link>
      </li>
      <li className="content">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
