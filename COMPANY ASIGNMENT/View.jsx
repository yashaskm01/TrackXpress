
import React, { useEffect, useState } from "react";
import axiosinstance from "./axiosinstance";

const View=()=>{
    let[customerdata,setcustomerdata]=useState([])

    useEffect(()=>{
        let fetchdata=async ()=>{
            let {data}=await axiosinstance.get("/posts")
            setcustomerdata(data)
        }
        fetchdata()
    },[])
    return(
        <div>
            {customerdata.map((i,index)=>{
                return(
                <ol key={index}>
                    <li>{i.customername}</li>
                    <li>{i.location}</li>
                </ol>
                )
            })}
        </div>
    )
}
export default View