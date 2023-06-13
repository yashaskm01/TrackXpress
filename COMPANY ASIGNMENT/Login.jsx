import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import style from './login.module.css'
import { Link } from 'react-router-dom';

export const Login = () => {
  let[username,setusername] =useState("")
  let[password,setpassword] =useState("") 

  let getdata=JSON.parse(localStorage.getItem("data"))
 

  let handlesubmit=(e)=>{
    e.preventDefault()
    if (getdata.username === username && getdata.phonenumber === password) {
      window.location.assign("/home")
    }
    else{
      toast.error("Invalid username and password")
    }
  }
  return (
    <>
    <ToastContainer/>
    <div id={style.main} >
      <div id={style.welcome}>
        <h1 id={style.track}>TrackXpress....</h1>
    <form action="" id={style.for}>
      <label htmlFor="username1">USERNAME:</label>
      <br />
      <input type="text" id={style.username1} onChange={(e)=>{
        setusername(e.target.value)
      }} />
      <br />
      <br />
      <label htmlFor="password">PASSWORD:</label>
      <br />
      <input type="number" id={style.password} onChange={(e)=>{
        setpassword(e.target.value)
      }}/>
      <div id={style.end}>
      <button onClick={handlesubmit} id={style.btn}>LOGIN</button>
      <button type='reset' id={style.btn}>CANCLE</button>
      </div>
    </form>
    <p>Don't have an account? <Link to={'/'} id={style.lin}>Register</Link></p>
    </div>
    </div>
    </>
  )
}
