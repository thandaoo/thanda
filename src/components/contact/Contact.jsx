import React, {useRef} from 'react'
import './contact.css'
import {MdOutgoingMail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0xr7ajf', 'template_lwigfti', form.current, 'GXtvvY1snAsb60L-3')

    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>See if we can build something together?</h5>
      <h2>Reach Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" id="message" rows="5" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutgoingMail className="contact__icon"/>
            <h4>Email</h4>
            <h5>thandaoo.9999@gmail.com</h5>
            <a href="mailto:thandaoo.9999@gmail.com" rel="noreferrer" target="_blank">Send Email</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className="contact__icon"/>
            <h4>WhatsApp</h4>
            <h5>+821034477584</h5>
           <a href="https://api.whatsapp.com/send?phone=+821034477584" rel="noreferrer" target="_blank">Send Message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
