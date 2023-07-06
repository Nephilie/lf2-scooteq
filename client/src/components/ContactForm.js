import React from 'react'
import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
            <input placeholder='Subject'></input>
            <textarea placeholder='Message' rows="4"/>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm