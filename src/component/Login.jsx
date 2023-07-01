import React, { useState } from 'react';
import Logo from "../image/google_icon.png";
import { auth, provider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Login = ({setIsAuth}) => {
  // state that hold every input value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
    let navigate = useNavigate();

    // sign-in function
    const signIn = () => {
      createUserWithEmailAndPassword(auth, email, password).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
        alert("You have successfully🎉  login");
      });
    };

    //  GooglesignIn
    const googleSignIn = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    };
     
  return (
    <div className='w-80 bg-black md:max-w-xl mx-auto md:h-[400px] flex flex-col mt-[1em] py-6 rounded-es-[3em]'>

      {/* input */}
     <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder='Enter your email...' className='w-60 mx-auto py-1 pl-2 rounded-md' /> 

     <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='Enter your passworee...' className='w-60 mx-auto mt-5 py-1 pl-2 rounded-md' /> 

     {/* signIn button */}
     <button onClick={signIn} className='bg-white font-medium w-60 mx-auto mt-6  py-1 rounded-md hover:opacity-[.7]'>Sign in</button>

     {/*  GooglesignIn */}
     <button onClick={googleSignIn} className='bg-white flex items-center justify-evenly font-medium w-60 mx-auto mt-6 mb-6 py-1 rounded-md hover:opacity-[.7]'>
     <img className='w-8 h-8' src={Logo} alt='google logo' /> Sign in with google
      </button>
      </div>
  )
}

export default Login