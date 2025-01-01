import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-full'>
      {/* Sidebar trigger */}
      <div className='absolute top-0 left-0 h-full w-2 bg-gray-800 hover:w-48 transition-all duration-300 shadow-lg'>
        <div className='h-full flex flex-col items-start bg-gray-800 text-white mt-20'>
          {/* Navigation Links */}
          <ul className='space-y-4 mt-8 px-4 w-full'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? 'bg-blue-500 text-white w-full p-2 rounded-md block'
                    : 'hover:bg-gray-700 w-full p-2 rounded-md block'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blogs'
                className={({ isActive }) =>
                  isActive
                    ? 'bg-blue-500 text-white w-full p-2 rounded-md block'
                    : 'hover:bg-gray-700 w-full p-2 rounded-md block'
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive
                    ? 'bg-blue-500 text-white w-full p-2 rounded-md block'
                    : 'hover:bg-gray-700 w-full p-2 rounded-md block'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Responsive Notice */}
          <div className='mt-auto w-full text-center bg-gray-900 p-4 text-sm'>
            <p>Responsive Sidebar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
