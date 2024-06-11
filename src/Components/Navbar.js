import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar