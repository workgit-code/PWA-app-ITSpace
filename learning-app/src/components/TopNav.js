import React from 'react'
import { Link } from "react-router-dom";
import "../stylesheets/TopNav.css";

function TopNav() {
  return (
    <div className="topNav">
    <Link to={"/"}>
    <i class="fas fa-cog" id="topIcon" sizes="40x40"></i>Web Dev Galaxy</Link>
    <Link to={"/"}></Link>
  </div>
  )
}

export default TopNav