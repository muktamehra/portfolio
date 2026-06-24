import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Mukta Mehra</NavLink>
      <div>
        <NavLink to="/" end>Work</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Navbar