import React from 'react'
import style from "./Footer.module.css";
import { FaFacebook, FaGithub } from 'react-icons/fa'


function Footer() {
  return (
  <footer className={style.footer}>
 <i className="fbIcon">
  <FaFacebook />
</i>
<i className="ghIcon">
  <FaGithub />
</i>

</footer>
  )
}

export default Footer;