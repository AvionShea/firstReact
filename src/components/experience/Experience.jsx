import React from 'react'
import './experience.css'
import {TiInputChecked} from 'react-icons/ti'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Can I Offer?</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="hard_skills">
          <h3>Hard Skills</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>CSS 3</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Oracle</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Django</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>

        </div>
{/*END OF HARD SKILLS*/}

        <div className="soft_skills">
          <h3>Soft Skills</h3>
          <div className="experience_content">

        <article className='experience_details'>
        <TiInputChecked className='experience_details-icon'/>
              <div>
                <h4>Active Listener</h4>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Collaboration</h4>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Adaptability/Flexibility</h4>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Self-motivated</h4>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Enthusiastic</h4>
              </div>
            </article>

            <article className='experience_details'>
            <TiInputChecked className='experience_details-icon'/>
              <div>
              <h4>Organized</h4>
              </div>
            </article>
          </div>

        </div>

      </div>
    
    </section>
  )
}

export default Experience