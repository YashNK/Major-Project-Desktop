import React, { useEffect, useRef, useState } from 'react'
import { Bars3BottomRightIcon, BeakerIcon, Cog6ToothIcon, HomeIcon, HomeModernIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-white.png'
import './NavBar.css'
function NavBar() {

  const navigate = useNavigate()

  const navigation = [
    { href:'/settings', icon: Cog6ToothIcon},
    { name:'Login' ,href: '/login'},
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsVisible(false);
        setIsButtonVisible(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
    setIsButtonVisible(false)
  };

  return (
    <>
    {/* {Desktop} */}
    <div className='desktop'>

      <div className='logo-div' onClick={()=>{navigate('/')}}>
          <img src={logo} className='logo'/>
          <h1 className='header'>BETTER SPEAK</h1>
      </div>
    
      <div className='links-div'>

        {navigation.map((item) => (
          <NavLink
          
          to={item.href}
          className={({isActive}) => {
          return (isActive ? 'btn-active' : 'btn-inactive') 
          }} 
          >
          {item.icon && <item.icon className="icon" />}
          </NavLink>
        ))}
          <NavLink
          to='/login'
          className={({isActive}) => {
          return (isActive ? 'btn-active' : 'btn-inactive') 
          }} 
          >
          <h1 className='login-btn'>LOGIN</h1>
          </NavLink>
      </div>
    </div>


    {/* {Mobile} */}
    <div className='mobile'>

      <div className='logo-div'>
        <img src={logo} className='logo'/>
        <h1 className='header'>BETTER SPEAK</h1>
      </div>

      <div className='drawer-div'>

      {isButtonVisible && <button onClick={toggleDiv}><Bars3BottomRightIcon className='w-6 rounded-sm '/></button>}
      
      {isVisible &&
      <div ref={divRef} className='drawer'>
        {navigation.map((item) => (
          <NavLink
          to={item.href}
          >
          {item.icon && <item.icon className="icon-mobile" />}
          </NavLink>
        ))}
         <NavLink
          to='/login'
          className={({isActive}) => {
          return (isActive ? 'btn-active' : 'btn-inactive') 
          }} 
          >
          <h1 className='loginM-btn'>LOGIN</h1>
          </NavLink>
      </div>}
      </div>
    </div>
    </>
  )
}

export default NavBar