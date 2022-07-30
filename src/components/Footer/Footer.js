import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Footer.module.css';



function Footer() {
  return (
    <div>
      <ul className={classes.footerWrapper}>
      <li>
        <NavLink className = {classes.footerLi} to='/'>Главная</NavLink>
        </li>
        <li>
          <NavLink  className = {classes.footerLi} to='/about'>О нас</NavLink>
          </li>
        <li>
          <NavLink className = {classes.footerLi} to="/profile">Профиль</NavLink>
          </li>
          <li>
            <NavLink className={classes.footerLi} to="/Counter">Счётчик</NavLink>
          </li>
      </ul>
    </div>
  );
}

export default Footer;