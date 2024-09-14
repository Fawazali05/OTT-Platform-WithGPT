import React from "react";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"
import Browse from "./Browse";
const Body = ()=>{
    const appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login className="overflow-x-hidden"></Login>
            },
            {
                path:"/browse",
                element:<Browse></Browse>
            }
        ]
    )
    return <div className="bg-black">
        <RouterProvider router={appRouter} />
    </div>
}

export default Body;