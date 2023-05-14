import React from 'react'
import './services.css'
import {CgRadioChecked} from 'react-icons/cg'

const Services = () => {
  return (
    <section id="services">
      <h5>What Do I Offer?</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          
          <ul className="services_list">
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
       {/* END OF UI/UX*/}
       <article className="services">
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          
          <ul className="services_list">
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
       {/* END OF WEB DEVELOPMENT*/}
       <article className="services">
          <div className="services_head">
            <h3>Content Creation</h3>
          </div>
          
          <ul className="services_list">
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <CgRadioChecked className="services_list-icon"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
       {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services