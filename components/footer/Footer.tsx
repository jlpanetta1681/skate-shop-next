import React from 'react'
import style from "./Footer.module.css";
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { RiTwitterLine } from 'react-icons/ri'


function Footer() {
  return (
  <footer className={style.footer}>
  <a href="https://www.facebook.com/Jlpanetta1681/">
 <i className="fbIcon">
 <FaFacebook className={style.i} size="50px" fill="blue" />
</i>
  </a>
<a href='https://github.com/jlpanetta1681'>

<i className="ghIcon">
  <FaGithub className={style.i} size="50px" fill="blue"
  />
</i>
  </a>

  <a href='https://github.com/jlpanetta1681'>

<i className="twIcon">
  <RiTwitterLine className={style.i} size="50px"fill="blue" />
</i>
  </a>

</footer>
  )
}

export default Footer;