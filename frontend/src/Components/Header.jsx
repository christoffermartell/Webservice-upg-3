import React from 'react'

import {Link} from "react-router-dom"

export default function Header() {

        const navStyle = {
            color : "white",
            listStyle: "none",
            
            
        };
    
    return (
        <div className="card bg-secondary text-center text-light rounded-0">
            <h1 className="display-4">
                <i className="fas fa-dice-d20"></i>
                <span className="text-dark mr-3">SpringBoot </span>X React
            </h1> <ul className="nav-links nav justify-content-center display-6">
     
     <Link style={navStyle} to="/register"><li>Register</li></Link>---
     <Link style={navStyle} to="/login"><li>Login</li></Link>---
     <Link style={navStyle} to="/forum"><li>Forum</li></Link>---
     <Link style={navStyle} to="/all"><li>All Posts</li></Link>
     
 </ul>
        
            
        </div>
    )
}
