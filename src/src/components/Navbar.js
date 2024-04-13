import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import './navbar.css'

import Projects from './Projects'
import Home from './Home'

const Navbar = () => {
  return (
    <div>
      <BrowserRouter> 
    <nav className="navbar">
      <div className="container">
        <div>
            <h4 className='navbar-title'>Branden McInnis</h4>
        </div>
        
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="About">About</NavLink>
            </li>
            <li>
            </li>
          </ul>
        </div>
        
      </div>
      
    </nav>
    <Routes>
            <Route
                        exact
                        path="/Projects"
                        element={<Projects />}
                    />     
            <Route
                        exact
                        path="/"
                        element={<Home />}
                    />                 
            </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default Navbar