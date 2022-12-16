import React, { useState } from "react";
import './Card.css'

function Card(){
    const [user, setUser] =useState('User Name');
    const [department,setDepartment] = useState ('Department');
    const [position,setTitle] = useState("intern") 
    const [email,setEmail] = useState ('lorem..');
    function handleClick(){

    }
     
    return( 
        <div className="card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fprofile-avatar%2F&psig=AOvVaw0MBk9cjjt6OopHdg1JW8pF&ust=1671259027987000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi6iJfD_fsCFQAAAAAdAAAAABAE" alt="avatar" height="100px" width="100px"/>
                </div>
            </div>
            <div className="lower-container">
                <h3>{user}</h3>
                <h4>{department}</h4>
                <h4>{position}</h4>
                <p>{email}</p>
                <button onClick={handleClick}> Edit Profile</button>
            </div>

        </div>
    )
}
export default Card