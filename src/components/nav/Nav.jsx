import React from 'react'
import './nav.css'
import {RiHomeHeartLine, RiUserHeartFill,} from 'react-icons/ri'
import {MdOutlineDesignServices, MdOutlineBusinessCenter, MdReviews} from 'react-icons/md'
import {DiCodeBadge} from 'react-icons/di'
import {TiBusinessCard} from 'react-icons/ti'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><RiHomeHeartLine/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><RiUserHeartFill/></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><MdOutlineBusinessCenter/></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><DiCodeBadge/></a>
      <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdOutlineDesignServices/></a>
      <a href="#references" onClick={()=> setActiveNav("#references")} className={activeNav === "#references" ? "active" : ""}><MdReviews/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><TiBusinessCard/></a>
    </nav>
  )
}

export default Nav