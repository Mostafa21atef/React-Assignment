import React from "react"
import '../css/contact.css'
export function Contact(){
return <>
<div className="text-center my-5 pt-5">
    <h2 className="contact">CONTACT SECTION</h2>
    <div class="separator">
    <span class="star">
    <i class="fa-solid fa-star fa-2xl my-3"></i>
    </span>
</div>
</div>
<div className="container form my-5">
    <div className="row">
        <div className="col-md-12">
        <input type="text" placeholder="userName" className="Input my-3"/>
        </div>
        <div className="col-md-12">
        <input type="number" placeholder="userAge" className="Input my-3"/>
        </div>
        <div className="col-md-12">
        <input type="email" placeholder="userEmail" className="Input my-3"/>
        </div>
        <div className="col-md-12">
        <input type="password" placeholder="userPaaword" className="Input my-3"/>
        </div>
    </div>
<button className="rounded-3 text-white p-3">Send Message</button>
</div>
</>   
}