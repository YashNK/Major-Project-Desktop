import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import './Login.css'
import Google from '../assets/google.png'
import wall1 from '../assets/wall1.jpg'
import { useNavigate, useNavigation } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

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
          <button onClick={()=>navigate('/dashboard')} className='loginbtn'>Login</button>
          <label className='or'>or</label>
          <label className='or'>Login using</label>
          <div className='google-div'>
             <img src={Google} className='google'/>
          </div>
          <label className='sign-up'>Do not have an account. Click here</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login