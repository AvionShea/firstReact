import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {IoIosPerson} from 'react-icons/io'
import {DiCodeBadge} from 'react-icons/di'

const About = () => {
  return (
    <section id= "about">
    <h5>Who Am I?</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_image-me">
          <img src={ME} alt="About Img" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          
          <article className="about_card">
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>0-6 months</small>
          </article>

          <article className="about_card">
            <IoIosPerson className='about_icon'/>
            <h5>Clients</h5>
            <small>Coming Soon</small>
          </article>

          <article className="about_card">
            <DiCodeBadge className='about_icon'/>
            <h5>Projects</h5>
            <small>3+ Completed</small>
          </article>

        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laboriosam labore nostrum maiores magnam rerum inventore saepe, quos impedit deserunt cum ab? Ducimus minus laborum iusto cumque saepe beatae voluptates mollitia dolor incidunt, accusantium quibusdam, culpa, quidem cupiditate. Ullam alias dolorem incidunt enim modi nam ducimus nostrum quos sequi nesciunt.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Chat!</a>

      </div>
    </div>
  </section>
  )
}

export default About