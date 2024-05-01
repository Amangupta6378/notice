import React from 'react';
import profileImage from '../Images/images.jpeg'

function NavBar() {
  return (
    <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
      <a className="text-2xl text-decoration-none font-bold text-red-700 dark:text-white" href="#">
        NotiDesk
      </a>

      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-violet-600 dark:text-gray-100 p-1" id="navbar_burger">
          <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Hamburger menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <div className="relative mx-auto text-gray-600">
            <input className="border border-gray-300 placeholder-current h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200" type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </li>
      </ul>

      <div className=" lg:flex items-center">
        {/* Profile Picture */}
        <img className="h-10 w-10 rounded-full object-cover cursor-pointer" src={profileImage} alt="Profile" />

        <button id="theme-toggle" type="button" className="hidden lg:inline-block lg:ml-auto py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700">
          {/* Theme Toggle Icons */}
        </button>
       
     
      </div>
    </nav>
  );
}

export default NavBar;
