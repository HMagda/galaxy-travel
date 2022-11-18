import React, {useState} from 'react';
import {FaRocket, FaBars, FaTimes} from 'react-icons/fa';
import styles from './Navbar.module.scss';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navMain}>
      <div>
        <Link to="/">
          <FaRocket className={styles.logo} alt="rocket logo" />
        </Link>
      </div>

      <ul
        className={
          styles.navMainUl + ' ' + (click ? styles.active : styles.navMainUl)
        }
      >
        <li className={styles.navMainLi}>
          <NavLink
            onClick={handleClick}
            className={({isActive}) =>
              isActive ? styles.linkActive : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navMainLi}>
          <NavLink
            onClick={handleClick}
            className={({isActive}) =>
              isActive ? styles.linkActive : undefined
            }
            to="/pricing"
          >
            Pricing
          </NavLink>
        </li>
        <li className={styles.navMainLi}>
          <NavLink
            onClick={handleClick}
            className={({isActive}) =>
              isActive ? styles.linkActive : undefined
            }
            to="/training"
          >
            Training
          </NavLink>
        </li>
        <li className={styles.navMainLi}>
          <NavLink
            onClick={handleClick}
            className={({isActive}) =>
              isActive ? styles.linkActive : undefined
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
