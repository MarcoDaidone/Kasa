import React from 'react';
import logo from '../img/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
<img src={logo}/>
<nav>
    <NavLink to='/'>Accueil</NavLink>
    <NavLink to='/a_propos'>A Propos</NavLink>
</nav>
    </div>
  );
};

export default Nav;
