import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        {errors.firstName && <span className="error">First Name is required</span>}
        
        <input
          type="text"
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        {errors.lastName && <span className="error">Last Name is required</span>}
        
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        {errors.email && <span className="error">Email is required</span>}
        
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Password"
        />
        {errors.password && <span className="error">Password is required</span>}
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  ); 
};

export default SignUp;
