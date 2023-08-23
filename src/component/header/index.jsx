import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const handleLogout = ()=> {
        window.location = '/'
    }
  return (
    <div>
       <a href="#logout" onClick={handleLogout}>Logout</a>
    </div>
  )
}

export default Header
