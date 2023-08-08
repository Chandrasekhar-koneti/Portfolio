import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroproject from '../components/Heroproject'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroproject heading='CONTACT' text='Let`s have a chat '/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
