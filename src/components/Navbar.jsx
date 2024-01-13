import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
    const navBackground = {
        backgroundColor:'#0F1035'
    }
  return (
    <>
    <nav style={navBackground} className='d-flex justify-content-between align-items-center m-0 px-5'>
        <Link to='/home' className='fs-3 ml-5 text-decoration-none fw-bold p-3 text-white'>Website</Link>
        <ul className='m-0 p-0 d-flex '>
            <li  className='nav-item'>
                <NavLink to='/about'className='d-block text-decoration-none rounded text-white mx-2 p-2 fw-bold'>About</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/Services' className='d-block text-decoration-none rounded text-white mx-2 p-2 fw-bold'>Services</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/Contact'  className='d-block text-decoration-none rounded text-white mx-2 p-2 fw-bold'>Contact</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}
