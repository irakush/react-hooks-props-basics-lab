import React from "react";
import Links from "./Links.js"

function About(props) {
  console.log(props)
  console.log(props.bio)
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {checkBio(props.bio)} */}
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : <></>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={props.links.linkedin} github={props.links.github} />
    </div>
  );
}

function checkBio(bio){

  console.log("Bio: ", bio)
  if(bio && bio != ""){
    return <p>{bio}</p>
  } 
}

export default About;
