import React from 'react'
import Image  from 'next/image';
import style from '../styles/Home.module.css'

function Shop() {
  return (
    <div className={style.shopImages}
    >
      <h1>Choose from dozens of stores and suppliers butBuy Your Shit Here!!</h1>

      <Image
        src="/boardshop.jpg"
        alt="skates"
        width = {500}
        height = {500}
      />

      <Image
        src="/skateshop.jpg"
        alt="skates"
        width = {500}
        height = {500}
      />
        
    </div>
  )
}

export default Shop