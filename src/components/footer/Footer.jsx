import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className="footer__logo">Thanda</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><BsFacebook /></a>
        <a href='https://instagram.com'><BsInstagram /></a>
      </div>

      <div className="copyright">
        <small>&copy;2023 | Created By Thanda</small>
      </div>
    </footer>
  )
}

export default Footer