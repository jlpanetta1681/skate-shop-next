import Image from 'next/image';
import style from "../styles/Home.module.css";

function Rinks () {
  return (
    <div>
      <Image src="/map.png"
      alt="skates"
      fill="true"
      />

      <h1>Locate a roller rink or skate park near you!!</h1>
      </div>
      )
}
 
export default Rinks;