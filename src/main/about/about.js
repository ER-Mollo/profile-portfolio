// import logo from './logo.svg';
import React from "react";
import './header.scss'

function About() {
  return (
    <div className="main">
      <div className="info">
        <div className="info_content">
            <p className="small">Hello, There</p>
            <h1 className="big">I am refilwe</h1>
            <h1 className="big">I am a Mobile and website Developer</h1>
        </div>
        <div className="info_buttons">
            <button className="button">Recent Work</button><br/>
            <button className="button">view Resume</button>
        </div>
      </div>
    </div>

  );
}

export default About;
