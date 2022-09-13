import React from 'react';
import {FaWhmcs} from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
 <nav className="navbar shadow-none p-0 mb-2 bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-secondary">LA BOUTIQUE DES MAILLOTS</span>
    <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FaWhmcs/></a>
        </li>
      </ul>
  </div>
 </nav>
        </div>
    );
}

export default Navbar;