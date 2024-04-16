import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authContext } from '../App';
import NavBar from '../Components/NavBar';
import Google from '../assets/google.png';
import './Login.css';
import axios from 'axios';
import whiteBG from '../assets/whiteBG.jpg';
import login from '../assets/login.jpg'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [authState, setAuthState] = useContext(authContext);

  const onSubmit = (data) => {
    console.log('Form data:', data);
    axios.post('https://dull-cyan-marlin-kit.cyclic.app/api/login',data).then((response)=>{
      setAuthState(true)
      console.log("logged in succesfully")
      console.log(response.data.user.isAdmin)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("isAdmin",response.data.user.isAdmin)
      navigate('/dashboard');     
    })
    .catch(()=>{
      console.log("something went wrong")
      navigate("/login")
    })
    
  };

  return (
    <>
      <NavBar />
      <div className='container-div'>
        <img src={login} className='background-wallpaper' alt='Background' />
        <div className='login-left'>
          <div>
          <h1 className='left-head'>Welcome to BetterSpeak</h1>
          <p className='left-para'>Your premier destination for improving speech fluency and confidence. Our cutting-edge app combines stuttering detection with PSS calculation, empowering you to understand your speech patterns and progress with ease. Whether you're seeking to overcome stuttering challenges or simply enhance your communication skills, BetterSpeak provides the tools and support you need. Join us today for a transformative journey towards clearer, more confident speech.</p>
          </div>
          <div>
            <button className='l-contact'>Contact Us</button>
            <button className='l-about'>About Us</button>
          </div>
        </div>
        <div className="inner">
          <div className='form'>
            <h1 className='login-header'>LOGIN</h1>
            <form className='form1' onSubmit={handleSubmit(onSubmit)}>
              <label className='lablecss'>Email:</label>
              <input className='inputcss' {...register('userEmail', { required: true })} />
              {/* Display error message if email is not provided */}
              {errors.email && <span className='error'>Email is required</span>}

              <label className='lablecss'>Password:</label>
              <input className='inputcss' type='password' {...register('userPassword', { required: true })} />
              {/* Display error message if password is not provided */}
              {errors.password && <span className='error'>Password is required</span>}
              <button type='submit' className='loginbtn'>Login</button>
            
            <label className='or'>or</label>
            <label className='or'>Login using</label>
            <div className='google-div'>
              <img src={Google} className='google' alt='Google' />
            </div>
            <label className='sign-up'>Do not have an account. <Link className='click' to="/signup">Click here</Link></label>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
