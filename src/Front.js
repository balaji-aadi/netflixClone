import React from 'react'
import { Link } from 'react-router-dom'
import './Front.css'

function Front() {
  return (
    <div className='container'>
      <div className="logo__container">
        <img className='logo'
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix_logo" />
      </div>

      <div className="desc">
        <h1>Unlimited movies, TV </h1>
        <h1>shows and more.</h1>
        <h4>Watch anywhere. See anytime</h4>
        <p>Ready to watch? Click on the start button to watch your awesome movies.</p>
        <button className='btn' ><Link className='btn__btn' to="/home">Get started</Link></button>
       
      </div>
    </div>
  )
}

export default Front