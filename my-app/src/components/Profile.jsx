import React from 'react';
import "./css/App.css";
import "./css/Profile.scss"

const Profile = ()=> {
    return(
        <div className = "content">
          <div className="user-zone">

            <div className="userImg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg"></img>
            </div>

            <div className = "user-info">
              <h2>Admin (Mihail)</h2>
              <p>Github: themishkaCoder</p>
              <p>City: Kiev</p>
            </div>
          </div>
        </div>
    )
}

export default Profile