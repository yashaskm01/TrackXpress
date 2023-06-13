import React, { useRef } from "react";
import home from './home.module.css'
import { Link } from 'react-router-dom';
import Coustomers from './Customers';
import View from './View';



const Home=()=>{

    let secref=useRef()
    return(
        <>
        <div id={home.ho}>
            <div id={home.lo}>
                <img src="https://media.istockphoto.com/id/849921508/vector/express-delivery-icon-concept-truck-with-stop-watch-icon-for-service-order-fast-free-and.jpg?s=612x612&w=0&k=20&c=HqxEhRqWAHW1_1iZPqumhAD1471RLH1b-B0XtQQ3gKc=" id={home.img} alt="no net" />
            </div>
            <div>
                <ul id={home.ul}>
                    <li id={home.li}><Link to={'/home'} id={home.L}>Home</Link></li>
                    <li id={home.li}><Link id={home.L}>track</Link></li>
                    <li id={home.li}><Link id={home.L}>about</Link></li>
                    <li id={home.li}><Link to={'/profile'} id={home.L}>Profile</Link></li>
                </ul>
            </div>
        </div>
        <div id={home.bio}>
            <div id={home.pro} ref={secref}>
                <Coustomers/>
                <View/>
            </div>
        <div id={home.map}>
        <iframe width="100%" height="800" title="transport xpress"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Decathlon%20Old%20Madras%20Road%20(OMR),%20Survey%20no.%2039/3,%20Bandapura%20Village,%20Bidarahalli%20Hobli%20Bangalore%20East%20Taluk%20Near%20Brigade%20Exotica,%20Bengaluru,%20Karnataka%20560049+(Transport%20xpress)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
        </div>
        </div>
        </>
    )
}
export default Home