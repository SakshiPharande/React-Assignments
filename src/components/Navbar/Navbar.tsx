import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" end>
            Home
        </NavLink>
        <NavLink to="/addtodo" end>
            AddTodo
        </NavLink>
    </nav>
  )
}

export default Navbar