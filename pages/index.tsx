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
          <Link className={styles.a} href="/">Home</Link>
          <Link className={styles.a} href="/Rinks">Find A Rink</Link>
          <Link className={styles.a} href="/Shop">Skate Shop</Link>
          .<Link className={styles.a} href="/Mission">The Mission</Link>
          <Link className={styles.a} href="/Contact">Hit Us Up</Link>
        </ul>
      </nav>
      <div className={styles.container}>
        <Image className={styles.image2}
          src="/pic2.jpg"
          alt="skateboard"
          width={500}
          height={500}
        />
        <h1 className={styles.container}>Join us for local events,<br />Online contests and freebies, and <br /> Video Tutorials every week </h1>
      </div>

      <Footer />
    </div>
  )
}






