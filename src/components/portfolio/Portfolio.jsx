import React from 'react'
import './portfolio.css'
import project1 from '../../assets/Spaceship_Game.PNG'
import project2 from '../../assets/Portfolio_Project.PNG'
import project3 from '../../assets/Spaceship_Game.PNG'
/*import {DiCodeBadge} from 'react-icons/di'*/

// An Example of an Array
const data = [
  
  {
    id: 1,
    image: project1,
    title: 'Spaceship Shooter Game',
    github: 'https://github.com/AvionShea/Python/tree/main/Spaceship%20Game',
    demo: 'https://github.com/AvionShea/',
  },
  
  {
    id: 2,
    image: project2,
    title: 'React Portfolio',
    github: 'https://github.com/AvionShea',
    demo: 'http://localhost:3000/#',
  },
  
  {
    id: 3,
    image: project3,
    title: 'Project Three',
    github: 'https://github.com/AvionShea/',
    demo: 'https://github.com/AvionShea/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>What Have I Worked On?</h5>
    <h2>Portfolio</h2>

{/* Mapping of Array */}
    <div className="portfolio_container"> 
      {
         data.map(({id, image, title, github, demo}) => {
          return (
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
              <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">{title}</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
              </article>
          )
         })
      }
    </div>
    </section>
  )
}

export default Portfolio