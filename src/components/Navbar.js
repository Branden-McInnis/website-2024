import { NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div>
            <h4 className='navbar-title'>Branden</h4>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar