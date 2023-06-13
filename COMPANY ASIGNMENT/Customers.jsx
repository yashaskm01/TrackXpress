import React, { useState } from "react";
import axiosinstance from "./axiosinstance";

const Coustomers=()=>{
    let [ customername,setcustomername]=useState("")
    let [phonenumber,setphonenumber]=useState("")
    let [location,setlocation]=useState("")

    
        let handlesubmit= async()=>{
            let data={
                customername,
                phonenumber,
                location
            }
            await axiosinstance.post("/posts",data)
        }

    return(
        <>
        <div style={{position:"relative",bottom:"110px"}}>
            <h1 style={{color:"brown"}}>Add Coustomer details</h1>
        </div>
        <div style={{position:"relative",bottom:"100px",left:"60px"}}>
            <form action="">
                <label htmlFor="cusname" style={{fontSize:"20px",fontStyle:"initial"}}>Name:</label>
                <br />
                <input type="text" id="cusname" onChange={(e)=>{
                    setcustomername(e.target.value)
                }}/>
                <br /><br />
                <label htmlFor="cusphone" style={{fontSize:"20px",fontStyle:"initial"}}>Phone-no</label>
                <br />
                <input type="number" id="cusphone" onChange={(e)=>{
                    setphonenumber(e.target.value)
                }}/>
                <br /><br />
                <label htmlFor="cusloc" style={{fontSize:"20px",fontStyle:"initial"}}>Location</label>
                <br />
                <input type="text" id="cusloc" onChange={(e)=>{
                    setlocation(e.target.value)
                }}/>
                <br /><br />
                <div style={{display:"flex",justifyContent:"space-evenly",position:"relative",right:"70px"}}>
                <button onClick={handlesubmit}>Add</button>
                <button>Cancle</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Coustomers
