import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  return (
    <>
    <nav>
        <Link to='/home' className='title'>Website</Link>
        <ul>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/Services'>Services</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'>Contact</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}
