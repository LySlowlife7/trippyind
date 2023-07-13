import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Trippy Ind</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/1">Hoddies</Link>
        </li>
        <li>
          <Link to="/category/2">Pantalones</Link>
        </li>
        <li>
          <Link to="/category/3"> Remeras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;