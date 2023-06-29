import React, { useState } from 'react';
import Logo from "../image/google_icon.png";



const Login = () => {
  // states that store email
  


  return (
    <div className='w-80 bg-black md:max-w-xl mx-auto md:h-[400px] flex flex-col mt-[1em] py-6 rounded-es-[3em]'>

      {/* input */}
     <input  type="email" placeholder='Enter your email...' className='w-60 mx-auto py-1 pl-2 rounded-md' /> 

     <input  type="password" placeholder='Enter your password...' className='w-60 mx-auto mt-5 py-1 pl-2 rounded-md' /> 

     {/* signIn button */}
     <button className='bg-white font-medium w-60 mx-auto mt-6  py-1 rounded-md hover:opacity-[.7]'>Sign in</button>

     <button  className='bg-white flex items-center justify-evenly font-medium w-60 mx-auto mt-6 mb-6 py-1 rounded-md hover:opacity-[.7]'>
     <img className='w-8 h-8' src={Logo} alt='google logo' /> Sign in with google
      </button>
      </div>
  )
}

export default Login