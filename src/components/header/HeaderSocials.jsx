import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/thanda-oo/" target="_blank"><BsLinkedin className='social_icon' /></a>
        <a href='https://github.com/thandaoo/' target="_blank"><FaGithub  className='social_icon' /></a>
    </div>
  )
}

export default HeaderSocials