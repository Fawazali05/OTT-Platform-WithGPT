import { useState } from "react";
import Header from "./Header";
import { useRef } from "react";
import checkValidData from "../utils/checkValidData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = ()=>{

    const dispatch = useDispatch()
    const [error, setError] = useState(null)
    const [isSignIn, setisSignIn] = useState(true)
    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
     const handleClick = (e)=>{
        console.log(" click");
        
        const msg = checkValidData(email.current.value, password.current.value)      
        console.log("pass : ", password.current.value);
        
        console.log("msg : ", msg);
          
        setError(msg)
        if(msg) return

        if(!isSignIn)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                console.log("user : ", userCredential.user);
                
                // Signed up 
                const user = userCredential.user;
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                // Profile updated!
                // ...
                const {uid,email,displayName, photoURL} = auth.currentUser
                dispatch(addUser({uid : uid,email: email,displayName: displayName , photoURL : photoURL}))

                }).catch((error) => {
                // An error occurred
                // ...
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }
        else{
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
        }
    }

    const toggleSignIn = ()=>{
        console.log(" toggle");
        
        setisSignIn(!isSignIn)
    }
    
    return <div className="w-full bg-black ">
        <Header></Header>
        <div className="">
            <div className="absolute ">
                    <img className="opacity-20" src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="background-image"></img>
            </div>
            <div className="flex justify-center ">
                <form 
                onSubmit={(e)=> e.preventDefault()}
                className="my-36 w-4/12 rounded-sm px-16 py-8 bg-black bg-opacity-50 z-10">
                    <div className="my-5">
                        <h1 className="text-white flex justify-start text-3xl font-bold">                       
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </h1>
                    </div>
                    { !isSignIn && <div>
                        <input ref={name} type="text" className="text-white h-14 w-full my-4 py-7 px-4  rounded-sm bg-transparent border border-gray-500  text-lg font-normal" placeholder="Full Name"></input>
                    </div>}
                    <div>
                        <input ref={email} type="text" className="text-white h-14 w-full my-4 py-7 px-4  rounded-sm bg-transparent border border-gray-500  text-lg font-normal" placeholder="Email or phone number"></input>
                    </div>
                    <div>
                        <input ref={password} type="password" className=" text-white h-14 w-full my-4 py-7 px-4 bg-slate-300 rounded-sm bg-transparent border border-gray-500 text-lg font-normal" placeholder="Password"></input>
                    </div>
                    <p className="text-red-600 text-sm">{error}</p>
                    <div className="">
                    <button 
                    onClick={()=>{
                        handleClick()
                    }}
                    className="h-12 w-full my-4 bg-red-600 text-white text-lg rounded-sm z-50" >
                       {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                    <h1 className="text-lg text-gray-200 font-medium">OR</h1>
                    <button className="h-12 w-full my-4 bg-gray-400 bg-opacity-40 z-50 text-white text-lg rounded-sm">
                        Use a {isSignIn ? "sign in" : "sign up"} code
                    </button>
                    <div>
                        <p className="flex justify-center text-white text-base font-light ">Forgot Password?</p>
                    </div>
                </div>
                <div className="text-pretty font-normal">
                    <p className="flex text-white font- text-base">                    
                        {isSignIn ? "New to Netflix?" : "Already a Member"}
                 <span className="font-bold cursor-pointer" onClick={toggleSignIn} >
                 {isSignIn ? "Sign up now" : "Sign in now"}</span></p>
                </div>
                <div className="text-left my-5"> 
                    <p className="text-sm font-thin text-white">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-700">Learn more</span>.
                    </p>
                </div>
            </form>
        </div>
        </div>
    </div>
}

export default Login;