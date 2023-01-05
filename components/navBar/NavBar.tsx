import React from 'react';
import styles from '/styles/Home.module.css';
import Link from 'next/link';


const NavBar = () => {
  return (
    <nav>
    <ul className={styles.ul}>
      <Link className={styles.a} href="/Rinks">Find A Rink</Link>
      <Link className={styles.a} href="/Shop">Skate Shop</Link>
      <Link className={styles.a} href="/Login">Sign up/Log In</Link>
      .<Link className={styles.a} href="/Mission">The Mission</Link>
      <Link className={styles.a} href="/Contact">Hit Us Up</Link>
    </ul>
    </nav>
  );
};
export default NavBar;