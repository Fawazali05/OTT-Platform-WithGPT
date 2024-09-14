import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

    const [isSignIn, setisSignIn] = useState(true)

    const toggleSignIn = ()=>{
        setisSignIn(!isSignIn)
    }
    return <div className="w-full ">
        <Header></Header>
        <div className="">
            <div className="absolute ">
                    <img className="opacity-20" src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="background-image"></img>
            </div>
            <div className="flex justify-center ">
                <form className="my-36 w-4/12 rounded-sm px-16 py-8 bg-black bg-opacity-50 z-10">
                    <div className="my-5">
                        <h1 className="text-white flex justify-start text-3xl font-bold">                       
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </h1>
                    </div>
                    { !isSignIn && <div>
                        <input type="text" className="text-white h-14 w-full my-4 py-7 px-4  rounded-sm bg-transparent border border-gray-500  text-lg font-normal" placeholder="Full Name"></input>
                    </div>}
                    <div>
                        <input type="text" className="text-white h-14 w-full my-4 py-7 px-4  rounded-sm bg-transparent border border-gray-500  text-lg font-normal" placeholder="Email or phone number"></input>
                    </div>
                    <div>
                        <input type="password" className=" text-white h-14 w-full my-4 py-7 px-4 bg-slate-300 rounded-sm bg-transparent border border-gray-500 text-lg font-normal" placeholder="Password"></input>
                    </div>
                    <div className="">
                    <button className="h-12 w-full my-4 bg-red-600 text-white text-lg rounded-sm z-50" >
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
                <div className="flex my-4 items-center">
                    <input type="checkbox" class="hidden peer"></input>
                    <div class="w-5 h-5 bg-white border border-gray-300 rounded-sm peer-checked:bg-blue-500 flex items-center justify-center">
                    <svg class="hidden peer-checked:block w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <p className="text-white text-lg mx-3">Remember Me</p>
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