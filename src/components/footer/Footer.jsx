import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#'className='footer_logo'>AvionShea</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#references'>References</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
<div className="footer_socials">
  <a href='https://www.linkedin.com/in/avion-cobb/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
  <a href='https://github.com/AvionShea/' target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
  <a href='https://twitter.com/Avion_Cobb' target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare/></a>
</div>

<div className="footer_copyrights">
  <small>
    &copy; AvionShea. All rights reserved. 
  </small>
</div>

    </footer>
  )
}

export default Footer