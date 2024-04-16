import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import sign from '../assets/sign-wall.jpg'
const SignUp = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/api/signup',data).then((response)=>{
              console.log(response)
              navigate("/login");
            }).catch(()=>{
                console.log("something went wrong")
                navigate("/signup")})
            }
    

  return (
    <div className="signup-container">

      <img src={sign} className='sign-wall' alt='Background' />
    <div className='sign-form'>

      <form className='f1' onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          type="text"
          {...register('userName', { required: true })}
          />
        {errors.firstName && <span className="error">First Name is required</span>}
        <label>Email:</label>
        <input
          type="email"
          {...register('userEmail', { required: true })}
          placeholder="Email"
          />
        {errors.email && <span className="error">Email is required</span>}
        <label>password:</label>
        <input
          type="password"
          {...register('userPassword', { required: true })}
          placeholder="Password"
          />
        {errors.password && <span className="error">Password is required</span>}
        
        <button type="submit">Sign Up</button>

      </form>
          </div>
    </div>
  ); 
};

export default SignUp;
