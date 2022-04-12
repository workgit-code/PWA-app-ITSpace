import React from 'react'
import "../stylesheets/Space.css";

function Space() {
  return (
    <div className='background'>
        <img src='./images/galaxybackground.jpg'/>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'></div>
    </div>
  )
}

export default Space