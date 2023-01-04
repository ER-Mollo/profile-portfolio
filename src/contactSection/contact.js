// import logo from './logo.svg';
import React from "react";
import './contact.scss'
import Contact from "../Contact/Contact";



function MainContact() {
  return (
    <div className="main_contact">
      <div className="head">
        <h1 className="text">Contact me</h1>
        <h2 className="text2">get in touch with me</h2>
        <Contact/>
      </div>
      <div className="form">
          <div className="control">
            {/* <label htmlFor="Email">Email </label><br></br> */}
            <input placeholder="Enter Your Name" id="email" />
          </div>
          <div className="control">
            {/* <label htmlFor="Email">Email </label><br></br> */}
            <input placeholder="Email-Address" id="email" />
          </div>
          <div className="control">
            {/* <label htmlFor="Email">Email </label><br></br> */}
            <input className="message" placeholder="Message" id="email" />
          </div>
          <button className="send">SEND MESSAGE</button>
      </div>
    </div>

  );
}

export default MainContact;
