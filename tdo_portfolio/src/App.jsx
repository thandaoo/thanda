import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
    </>
  )
}

export default App