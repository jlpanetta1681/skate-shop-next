import styles from '../styles/Home.module.css';
// import NavBar from "../components/navBar/NavBar";
// import Footer from "../components/footer/Footer";
// import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  return (
  <div>
     <Image 
       src="/pic1.jpg"
       alt="skates"
       fill="true"
       />
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
       <div className={styles.container}>
           <h1 className={styles.container}>Your One Stop Shop For All Things Skate!</h1>
       </div>

   </div>
    )
}
  

