import styles from '../styles/Home.module.css';
import Footer from "../components/footer/Footer";
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
          <Link className={styles.a} href="/Rinks">Find A Rink</Link>
          <Link className={styles.a} href="/Shop">Skate Shop</Link>
          <Link className={styles.a} href="/Login.tsx">Sign up/Log In</Link>
          .<Link className={styles.a} href="/Mission">The Mission</Link>
          <Link className={styles.a} href="/Contact">Hit Us Up</Link>
        </ul>
      </nav>
      <div className={styles.container}>
        <h1>Welcome toRoller Skaters and Skate boarder's Paradise</h1>
        <h1>Join us for local events, Online contests and freebies, and <br /> Video Tutorials every week!</h1>
      </div>

      <Footer />
    </div>
  )
}






