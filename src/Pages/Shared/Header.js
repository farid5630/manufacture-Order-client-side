import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);


   const logout = () => {
     signOut(auth);
     localStorage.removeItem("accessToken");
   };
   const menuItems = (
     <>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/blogs">Blogs</Link>
       </li>
       <li>
         <Link to="/contact">Contact</Link>
       </li>
       {user && (
         <>
           
         <li>
           <Link to="/dashboard">Dashboard</Link>
           </li>
           <li className='items-center bg-gray-500 rounded px-2 text-white'>{user?.displayName}</li>
         </>
         
       )}
       <li>
         {user ? (
           
           <button className="btn btn-ghost" onClick={logout}>
             Sign Out
           </button>
         ) : (
           <Link to="/login">Login</Link>
         )}
       </li>
     </>
   )
    return (
      <div class="navbar bg-base-100 max-w-7xl mx-auto px-12">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">BD Menufacture</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        
      </div>
    );
};

export default Header;