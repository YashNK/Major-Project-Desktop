import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('userName', { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && <span className="error">First Name is required</span>}
        
        {/* <input
          type="text"
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && <span className="error">Last Name is required</span>} */}
        
        <input
          type="email"
          {...register('userEmail', { required: true })}
          placeholder="Email"
        />
        {errors.email && <span className="error">Email is required</span>}
        
        <input
          type="password"
          {...register('userPassword', { required: true })}
          placeholder="Password"
        />
        {errors.password && <span className="error">Password is required</span>}
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  ); 
};

export default SignUp;
