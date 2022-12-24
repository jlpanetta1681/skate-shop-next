import React from 'react';
import styles from './NavBar.module.css'
import Link from 'next/link';


const NavBar = () => {
  return (
    <nav>
  <ul className={styles.ul}>
    <li id='lihome'>
        <Link className={styles.a} id='a_home' href="/">Home</Link>
    </li>
    <li id='li1'>
         <Link className={styles.a} id='a_1' href="/Rinks">Find A Rink</Link>
    </li>
    <li id='li2'>
      <Link className={styles.a} id='a_2' href="/Shop">Skate Shop</Link>
    </li>
    <li id='li3'>
      <Link className={styles.a} id='a_3' href="/Tutorials">Learn Some Stuff</Link>
    </li>
    </ul>
    
    </nav>
  );
};

export default NavBar;