import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from '../Hero'
import bg from "../../asstes/nonny.png";
import ContactForm from '../ContactForm';
import { Login } from '../Login';

const Contact = () => {
  return (
    <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={bg} title="Contact" btnClass="hide"/>
        <ContactForm />

        <Footer />
    </>
  )
}

export default Contact