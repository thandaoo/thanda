import React from 'react'
import './nav.css'
import {BiHomeAlt, BiUserCircle, BiCodeBlock,BiMailSend} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}> <BiHomeAlt /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUserCircle /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiCodeBlock /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMailSend /></a>
      </nav>
  )
}

export default Nav