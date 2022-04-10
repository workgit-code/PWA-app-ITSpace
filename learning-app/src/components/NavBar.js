import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/NavBar.scss";

function NavBar() {
  return (
    <div className="nav">
      <Link to={"/"}>
        <i class="fas fa-compass" id="compass" sizes="40x40"></i>Explore</Link>
      <Link to={"/planets"}>My Galaxy</Link>
      <Link to={"/"}>Profile</Link>
    </div>
  );
}

export default NavBar;
