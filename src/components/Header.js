import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
export default function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleGptSearch = ()=>{
    console.log("in handle");
    
    dispatch(toggleGptSearchView())
  }

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName, photoURL} = user;
      dispatch(addUser({uid : uid,email: email,displayName: displayName , photoURL :photoURL}))
      navigate("/browse")
      // ...
      } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
      // ...
      }
  });
  return ()=> unsubscribe()
},[])


  return (
    <div className='absolute w-full flex px-24 z-10 justify-between bg-gradient-to-b from-black to-transparent ' > 
      <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt="logo"
      ></img>
      <div>
      <button className='bg-red-600 text-sm rounded-sm py-2 px-3' onClick={handleGptSearch}>GPT Search</button>
      <button className='font-bold text-white text-sm m-1' onClick={handleSignOut}>Sign out</button>
      <span className='text-sm'>{name && "Hello, " + name?.displayName }</span>
      </div>
      
    </div>
  )
}
