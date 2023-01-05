import styles from '/styles/Home.module.css';
import Footer from "../components/footer/Footer";
import Image from 'next/image';
import NavBar from "../components/navBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />  
      <Image
        src="/pic1.jpg"
        alt="skates"
        fill="true"
      />
      
      <div className={styles.container}>
        <h1>Welcome to Roller Skaters and Skateboarder Paradise</h1>
        <h1>Join us for local events, Online contests and freebies, and <br /> Video Tutorials every week!</h1>
      </div>
      <button>Login</button>
      <button>Register</button>

      <Footer />
    </div>
  )
}






