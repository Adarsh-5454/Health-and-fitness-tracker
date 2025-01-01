import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='flex space-x-4 p-4 bg-gray-800 text-white'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/blogs'
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
