import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import './Login.css'
import Google from '../assets/google.png'
import wall1 from '../assets/wall1.jpg'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <>
    <div className='container-div'>
      <img src='https://images2.alphacoders.com/130/1308898.jpg' className='background-wallpaper'/>
      <div className="inner">
        <div className='form'>
          <h1 className='login-header'>LOGIN</h1>
          <label>Email:</label>
          <input/>
          <label>Password:</label>
          <input/>
          <button className='loginbtn'>Login</button>
          <label className='or'>or</label>
          <label className='or'>Login using</label>
          <div className='google-div'>
             <img src={Google} className='google'/>
          </div>
          <label className='sign-up'>Do not have an account. <Link to="/signup">Click here</Link></label>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login