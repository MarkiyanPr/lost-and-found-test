import React from 'react';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import logo from '../../img/logo.svg';
import accountImg from '../../account.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <label className='burger-menu'>
        <input type="checkbox"></input>
        <span className="menu"> <span className="hamburger"></span> </span>
        <ul>
          <li> <a href="#">mail@gmail.com</a> </li>
          <li> <a href="#">+38 098 34 58 736</a> </li>
          <li> <a href="#">Social</a> </li>
          <li> <Link to="/about-us">Про нас</Link> </li>
        </ul>
      </label>
      <div className="logo">
      <Link to="/">
        <span className='logo-span'>LOST & FOUND</span>
        </Link>
      </div>
      <div className="buttons-header">
      <Link to="/find">
          <button className="find-btn">Знайшов</button>
        </Link>
        <Link to="/lost">
        <button className="search-btn">Шукаю</button>
        </Link>
        <div className="account-icon">
          <img src={accountImg} alt="description of the image" />
          <span className="triangle"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
