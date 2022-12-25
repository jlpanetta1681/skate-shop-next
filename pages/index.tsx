import styles from '../styles/Home.module.css';
import Footer from "../components/footer/Footer";
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
    
      <Link className={styles.a}  href="/">Home</Link>
   
  
      <Link className={styles.a}  href="/Rinks">Find A Rink</Link>
 
    
      <Link className={styles.a}  href="/Shop">Skate Shop</Link>
     
      <Link className={styles.a}  href="/Mission">The Mission</Link>
      <Link className={styles.a}  href="/Contact">Hit Us Up</Link>
    
  </ul>
    </nav>
       <div className={styles.container}>
           <h1 className={styles.container}>Your One Stop Shop For All Things Skate!</h1>
           <Footer />
       </div>
      
   </div>
    )
}
  

