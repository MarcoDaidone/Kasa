import React from 'react';
import logo from '../img/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
<img src={logo}/>
<nav>
    <NavLink exact activeClassName="active" to='/'>Accueil</NavLink>
    <NavLink exact activeClassName="active" to='/a_propos'>A Propos</NavLink>
</nav>
    </div>
  );
};

export default Nav;
