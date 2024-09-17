import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useSelector, useStore } from 'react-redux';
export default function Header() {

  const navigate = useNavigate();

  const name = useSelector((state)=>state?.user)
  const handleSignOut = ()=>{
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
  }).catch((error) => {
    // An error happened.
  });
}


  return (
    <div className='absolute w-full flex px-24 z-10 justify-between bg-gradient-to-b from-black to-transparent ' > 
      <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt="logo"
      ></img>
      <div>
      <button className='font-bold text-white text-sm m-1' onClick={handleSignOut}>Sign out</button>
      <span className='text-sm'>{name && "Hello, " + name?.displayName }</span>
      </div>
      
    </div>
  )
}
