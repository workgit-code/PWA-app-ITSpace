import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <Link to={"/"}>
        <i class="fas fa-compass" id="icon" sizes="40x40"></i></Link>
      <Link to={"/planets"}><i class="fas fa-globe" id="icon"></i></Link>
      <Link to={"/planetItem"}><i class="fas fa-user" id="icon"></i></Link>
    </div>
  );
}

export default NavBar;
