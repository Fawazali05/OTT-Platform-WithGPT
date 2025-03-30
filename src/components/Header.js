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
  const gpt = useSelector((state)=> state?.gpt.showGptSearch)
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
    <div className='absolute w-screen flex sm:px-24 px-2 py-2 z-10 justify-between sm:bg-gradient-to-b from-black to-transparent bg-black sm:w-screen' > 
      <img className='sm:w-48 h-full w-24' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt="logo"
      ></img>
      <div className='flex items-center'>
      <button className='bg-red-600 sm:text-sm rounded-sm sm:py-2 px-3  py-1 text-xs' onClick={handleGptSearch}> { gpt ? "Home Page" : "GPT Search"}</button>
      <button className='font-bold text-white sm:text-sm text-xs m-1' onClick={handleSignOut}>Sign out</button>
      <span className='sm:text-sm text-xs text-white'>{name && "Hello, " + name?.displayName }</span>
      </div>
    </div>
  )
}
