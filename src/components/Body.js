import React, { useEffect } from "react";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = ()=>{
    
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login className="overflow-x-hidden "></Login>
            },
            {
                path:"/browse",
                element:<Browse></Browse>
            }
        ]
    )

      
    return <div className="">
        <RouterProvider router={appRouter} />
    </div>
}

export default Body;