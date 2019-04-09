import React from 'react';
import "./css/App.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
import {Route} from "react-router-dom"



const App = ()=> {
    return (
      <div className="app-container">
        
        <Header/>

        <div className="wrapper">
        <Sidebar/>

        <Profile/>
        </div>
        
        
        

      </div>
    );
}

export default App;
