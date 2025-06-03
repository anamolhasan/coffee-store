import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

const Header = () => {
  const {user, logOut } = useContext(AuthContext)


    const handleLogOut = ()=>{
      logOut().then(() => {
        alert('user logged Out successfully ')
      }).catch((error) => {
        console.log(error)
      });    
  }
  return (
    <div className="container mx-auto navbar  bg-base-100 shadow-sm py-5">
  <div className="navbar-start">

    {/* for mobaile */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>      
        <li><NavLink to={'/all-coffees'}>All Coffee's</NavLink></li>
       {
        user && (
          <>
           <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li>
           <li><NavLink to={'/my-added-coffees'}>My Added Coffee's</NavLink></li>
           <li><NavLink to={'/my-orders'}>My Orders</NavLink></li>
          </>
        )
       }
      </ul>

    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>

  {/* for pc */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'}>Home</NavLink></li>      
      <li><NavLink to={'/all-coffees'}>All Coffee's</NavLink></li>
      <li><NavLink to={'/users'}>Users</NavLink></li>
      <li><NavLink to={'/users2'}>Users2</NavLink></li>
      {
        user ? (
          <>
            <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li>
            <li><NavLink to={'/my-added-coffees'}>My Added Coffee's</NavLink></li>
            <li><NavLink to={'/my-orders'}>My Orders</NavLink></li>
            {user && (
                <div className='flex justify-around items-center gap-2'>
                  {user?.photoURL && (
                    <img
                      src={user.photoURL}
                      referrerPolicy='no-referrer'
                      alt='avatar'
                      className='w-8 rounded-full hidden md:flex'
                    />
                  )}
                  <button className='btn btn-warning' onClick={handleLogOut}>
                    Logout
                  </button>
                </div>
              )}
          </>
        ) : (
          <>
          <li><Link to={'/signin'}>Sign In</Link></li>
          <li><Link to={'/signup'}>Register</Link></li>
          </>
        )
      }
    </ul>
  </div>
  
</div>
  )
}

export default Header