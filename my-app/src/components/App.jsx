import React from 'react';
import "./css/App.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Chat from './Chat';
import {Route, Router, Switch, BrowserRouter} from "react-router-dom"



const App = (props)=> {
    return (
      <BrowserRouter>
      <div className="app-container">
        
        <Header/>

        <div className="wrapper">
          <Sidebar/>

          {/* <Profile/> */}

          
            <Route path="/" component={Profile}/>
            <Route path="/chat" component={Chat}/>
          
        </div>
      </div>
      </BrowserRouter>
    );
}

export default App;
