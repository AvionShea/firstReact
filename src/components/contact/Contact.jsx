import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2vd17ud', 'template_zd75534', form.current, 'q4UKJ6Fm52WPPWiTs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <section id="contact">
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <AiTwotoneMail className='contact_option-icon'/>
          <h4>Email</h4>
          <a href='mailto:Avion_Cobb@yahoo.com'target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
          <BsLinkedin className='contact_option-icon'/>
          <h4>LinkedIn</h4>
          <a href='https://www.linkedin.com/in/avion-cobb/' target="_blank" rel="noopener noreferrer">Connect with me</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='subject'placeholder='Subject' required />
          <input type="text" name='name'placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact