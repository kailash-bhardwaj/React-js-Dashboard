
import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu'

function Header() {
  return (
    <>
<div className='header'>
  <MobileMenu/>
    <Link to="/dashboard"> Logout</Link>
</div>
    </>
  );
}

export default Header;