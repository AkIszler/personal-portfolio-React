import React from 'react'
import { Link } from 'react-scroll'
import './intro.css'
import btnImage from './../../assets/hireme.png'
import  Him  from './../../assets/pngegg.png'

function Intro() {
  return (
    <section id='intromain'>
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className="myName">Anthony Iszler</span> <br />IT / Web development</span>
        <p className="introPar">A decade of IT who jumped to fullstack web devlopment, a jack of many trades, and general tech enthusiast </p>
        <Link><button className="hireBtn"><img src={btnImage} alt="hirelogo" className='btnLogo' />Hire Me</button></Link>
      </div>
      <img src={Him} alt="" className='bg' />
    </section>
    
  )
}

export default Intro
