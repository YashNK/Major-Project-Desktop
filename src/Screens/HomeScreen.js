import React from 'react'
import NavBar from '../Components/NavBar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Home.css'
import home from '../assets/home.png'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  
  const navigate = useNavigate()

  return (
    <>
     <div className='wrapper'>
        <header>
          <img src='https://r2.erweima.ai/imgcompressed/compressed_fd7c731d6847d1cab97c6d7c1b408e59.webp' className='background'/>
          {/* <img src='https://4kwallpapers.com/images/wallpapers/night-sky-colorful-3840x2160-12510.jpg' className='background' /> */}
          <div className='black-layer'></div>
          <h1 className='title'>BETTER SPEAK</h1>
          <p className='subtitle'>Welcome to BetterSpeak, are you ready to begin your journey with us.</p>
          <div className='btn-div'>
            <button className='getStarted-btn'  onClick={()=>navigate('/login')}>Get Started</button>
            <button className='research-btn'>Research Papers</button>
          </div>
        </header>
        <section>
          <div className='card1'>
            <p>
              Stuttering Detection Model
            </p>
            <button>View Paper</button>
          </div>
          <div className='card1'>
            PSS Calculation
            <button>View Paper</button>
          </div>
        </section>
        <div className='section2'>
            footer link
        </div>
      </div> 
    </>
  )
}

export default HomeScreen