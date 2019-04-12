import React from 'react';
import {Link} from "react-router-dom";
//import "./css/App.css"

const Sidebar = ()=>{
    return (
        <nav className = "sidebar">
          <ul>
            <li>
              {/* <a href = "">Profile</a> */}
              <Link to="/">Profile</Link>
            </li>
            <li>
              {/* <a href = "">Chat</a> */}
              <Link to="/chat">Chat</Link>
            </li>
            <li><a href = "">News</a></li>
            <li><a href = "">Music</a></li>
          </ul>
        </nav>
        
    )
}

export default Sidebar