import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/photo'>Photo</Link>
      <Link to='/user'>User</Link>
    </nav>
  );
};

export default Navbar;
