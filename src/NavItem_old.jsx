import { Link } from "react-router-dom"

function NavItem({href,children}) {
  return (
    <li>
        <Link to={href}>
            {children}
        </Link>
    </li>
  )
}

export default NavItem