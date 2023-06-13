import React from "react";
import profile from './profile.module.css'

const Profile=()=>{

    let data=JSON.parse( localStorage.getItem("data"))
    console.log(data);
    return(
        <div id={profile.m1}>
        <div id={profile.dis}>
            <img src="https://cdn4.vectorstock.com/i/1000x1000/44/73/boy-avatar-in-round-web-button-isolated-on-white-vector-20694473.jpg" id={profile.im} alt="no net" />
            <h1 id={profile.data1}>{data.username}</h1>
            <h3 id={profile.data}>{data.email}</h3>
            <h3 id={profile.data}>{data.phonenumber}</h3>
        </div>
        <button id={profile.bac} onClick={()=>{
            window.location.assign("/home")
        }}>Back</button>
        </div>
    )
}
export default Profile