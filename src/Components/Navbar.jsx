import React from 'react';
import logo from './Images/logo.png';
import {Link} from 'react-router-dom';
import {CiSearch} from "react-icons/ci"


export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo}  />
        <div>
            <Link to={'/'}>TV Shows</Link>
            <Link to={'/'}>Movies</Link>
            <Link to={'/'}>Recently</Link>
            <Link to={'/'}>My List</Link>
        </div>
        <CiSearch />
    </nav>
  )
}
