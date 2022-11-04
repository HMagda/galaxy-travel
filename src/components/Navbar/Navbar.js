import React from "react";
import {FaRocket} from "react-icons/fa";
import styles from "./Navbar.module.scss";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (

<nav className={styles.navMain}>
<div className={styles.icon}>

      <Link to="/">
        <FaRocket className={styles.logo} alt="rocket logo"/>
      </Link>

</div>

<ul className={styles.navMainUl}>
  <li className={styles.navMainLi}>
    <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/" >
      Home
    </NavLink>
  </li>
  <li className={styles.navMainLi}>
    <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/pricing" >
    Pricing
    </NavLink>
  </li>
  <li className={styles.navMainLi}>
    <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/training" >
    Training
    </NavLink>
  </li>
  <li className={styles.navMainLi}>
    <NavLink className={({isActive}) => isActive ? styles.linkActive : undefined } to="/contact" >
    Contact
    </NavLink>
  </li>
</ul>
</nav>


  );
};

export default Navbar;
