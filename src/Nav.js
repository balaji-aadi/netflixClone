import React, { useState }  from 'react'
import './Nav.css'

function Nav() {

  const [isScrolled , setisScrolled] = useState(false);

  window.onscroll = () =>{
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null); 
  }

  return (
    <div className={`nav ${isScrolled && 'nav__black'}`}>
        <img 
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo" />

        <img 
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="Nav-avatar" />
    </div>
  )
}

export default Nav