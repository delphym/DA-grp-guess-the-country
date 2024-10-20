import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">| Home |</Link>
        </li>
        <li>
          <Link to="http://delphym-mania-chc-24-worldwide-routing.devacademy.nz/">
            | Need some learning? |
          </Link>
        </li>
        <li>
          <Link to="#credit">| Credit |</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
