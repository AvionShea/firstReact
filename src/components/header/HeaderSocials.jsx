import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/avion-cobb/" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>
        <a href="https://github.com/AvionShea/" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials