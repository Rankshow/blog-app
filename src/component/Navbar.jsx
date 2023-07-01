import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';


const NavBar = ({isAuth, setIsAuth}) => {
  
  // signOut
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <nav className='max-w-4xl mx-auto shadow-md shadow-red-800 bg-black text-white font-medium flex items-center justify-around h-20'>
      <h1 className='text-xl md:text-3xl text-blue-700 border border-l-purple-500 border-r-purple-500 font-Rampart cursor-pointer'>Rankshow</h1>
        <FontAwesomeIcon icon={faUser} style={{color: "#eef3fb",marginLeft:"-1em"}} />

        {/* nav-links */}
           <ul className='flex'>
             <Link to="/"><li className='hover:underline hover:decoration-blue-700 cursor-pointer'>Home</li></Link>  
              <Link to="/createpost"><li className='hover:underline hover:decoration-blue-700 cursor-pointer md:ml-6 ml-2 '>Create Post</li></Link>
              
            {
             !isAuth ?
             <Link to="/login"><button className='bg-blue-700 hover:opacity-[.7] rounded-md md:ml-6 ml-2 px-3'>form</button></Link> :
            <button onClick={logOut} className='bg-red-700 hover:opacity-[.7] rounded-md md:ml-6 ml-2 px-3'>logout</button>
            } 
          </ul>
    </nav>
  )
}

export default NavBar;