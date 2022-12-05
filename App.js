import React from "react"
import Navbar from "./components/Navbar"
import Blog from "./components/Blog"
import data from "./data"
export default function App(){
    const blogs = data.map(item => {
        console.log(item)
        return (
            <Blog 
                key={item.id}
                item = {item}
            />
        )
    })
    
    return(
        <div>
        <Navbar/>
        {blogs}
        </div>
    )
}